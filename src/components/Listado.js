import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import { Card, Container, Form, Modal } from "react-bootstrap";
import Tablapersonaje from "./Tabla";
import Swal from "sweetalert2";

function Listado(){
    const url="http://localhost:2000/personaje";
    const getData=async()=> {
        const response=axios.get(url);
        return response;
    }
const [list,setList]=useState([]);
const [upList,setUpList]=useState([false]);
const [showModal, setShowModal]=useState([false]);
const [dataModal, setDataModal]=useState([]);

const handleCloseModal=()=>{setShowModal(false)}
const handleOpenModal=()=>{setShowModal(true)};

//const [dataForm, setDataForm]=useState({id: '', nombre:'', rango: '', alias:'', vehiculo:'', foto:''});
const handleChangeModal=({target})=>{
    setDataModal({
        ...dataModal,
        [target.name]: target.value
    })
}
const handleEditSubmit= async (e)=> {
    e.preventDefault();
    const response = await axios.put(`${url}/${dataModal.id}`, dataModal);

    if (response.status === 200) {
        Swal.fire(
            'Listo!',
            'El personaje se ha modificado.',
            'success'
        )
        handleCloseModal();
        setUpList(!upList);
    } else {
        Swal.fire(
            'Error!',
            'Hubo un problema al modificar.',
            'error'
        )
    }
}

useEffect(()=> {
    getData().then((response)=> {
        setList(response.data);
    })
},[upList])

    return(
        <Container>
            <table className="table table-striped">
            <thead>
                <th>#</th>
                <th>Nombre</th>
                <th>Rango</th>
                <th>Alias</th>
                <th>Vehiculo</th>
                <th>Foto</th>
                <th colSpan="2">Acciones</th>
            </thead>
            <tbody>
            {
                    list.map((personaje,index)=> (
                        <Tablapersonaje 
                        key={index} 
                        personaje={personaje}
                        setUpList={setUpList}
                        upList={upList}
                        handleCloseModal={handleCloseModal}
                        handleOpenModal={handleOpenModal}
                        setDataModal={setDataModal}
                        />
                    ))
                }
            </tbody>
        </table>
        <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Actualizar datos de personaje</Modal.Title>
                </Modal.Header>
                <Form onSubmit="">
                <Modal.Body>
                <Form.Group class="mb-3 mx-5">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del personaje"
                            name="nombre"
                            value={dataModal.nombre}
                            onChange={handleChangeModal}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Rango</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el rango del personaje"
                            name="rango"
                            value={dataModal.rango}
                            onChange={handleChangeModal}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Alias</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el alias del personaje"
                            name="alias"
                            value={dataModal.alias}
                            onChange={handleChangeModal}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Vehiculo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el vehiculo del personaje"
                            name="vehiculo"
                            value={dataModal.vehiculo}
                            onChange={handleChangeModal}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la url con la foto del personaje"
                            name="foto"
                            value={dataModal.foto}
                            onChange={handleChangeModal}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" type="button" onClick={handleCloseModal}>Cerrar</button>
                    <button className="btn btn-success" type="submit" onClick={handleEditSubmit}>Guardar Cambios</button>
                </Modal.Footer>
                </Form>
        </Modal>
                
        </Container>
)
}
export default Listado;