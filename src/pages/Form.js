import axios from "axios";
import { Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Formulario() {
    const navigate=useNavigate();
    const [data, setData] = useState({ id: '', nombre:'', rango: '', alias:'', vehiculo:'', foto:''})
    
    const handleChange=({target})=> {
        setData({
            ...data,
            [target.name]
            :target.value
        })
    }
    const url = "http://localhost:2000/personaje";

    const handleSubmit= async (e)=> {
        e.preventDefault();
        const response= await axios.post(url,data)
        if (response.status === 201){
            Swal.fire(
                'Guardado',
                `El personaje <strong>${response.data.nombre}</strong> ha sido creado`,
                'success')
                navigate("/personajes");
        }
        else {
           
        }
    }
        
    
    return (
        <main>
            <Container>
                
                <Form className="mx-5 my-5" onSubmit="">
                <div><h2>Creación de personaje</h2>
                    <Form.Group class="mb-3 mt-5 mx-5">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del personaje"
                            name="nombre"
                            value={data.nombre}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Rango de la Blacklist</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el rango"
                            name="rango"
                            value={data.rango}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Alias o sobrenombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el alias"
                            name="alias"
                            value={data.alias}
                            onChange={handleChange}
                        />
                    </Form.Group></div>
                    <div>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Tipo de vehículo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el vehiculo"
                            name="vehiculo"
                            value={data.vehiculo}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group class="mb-3 mx-5">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la URL de la imagen"
                            name="foto"
                            value={data.foto}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    
                    <button className='btn btn-primary mt-3' onClick={handleSubmit}>
                        Guardar
                    </button></div>
                </Form>
                
            </Container>
        </main>
    )
}
export default Formulario;