import Swal from "sweetalert2";
import axios from "axios";

function Tablapersonaje({ personaje, setUpList, upList, handleCloseModal, handleOpenModal, setDataModal }) {

    const url = "http://localhost:2000/personaje"
    const handleDelete = async () => {
        Swal.fire({
            title: 'Desea eliminar el personaje?',
            text: "No puedes revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${url}/${personaje.id}`).then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        Swal.fire(
                            'Listo!',
                            'El personaje se ha eliminado.',
                            'success'
                        )
                        setUpList(!upList);
                    } else {
                        Swal.fire(
                            'Error!',
                            'Hubo un problema al borrar.',
                            'error'
                        )
                    }
                })

            }
        })
    }
    const handleEdit=()=>{
        handleOpenModal()
        setDataModal(personaje)
    }

return (
        
        <tr>
        <td>{personaje.id}</td>
        <td>{personaje.nombre}</td>
        <td>{personaje.rango}</td>
        <td>{personaje.alias}</td>
        <td>{personaje.vehiculo}</td>
        <td><img src={personaje.foto} alt="foto de perfil" width="100px"></img></td>
        <td><button className="btn btn-primary" onClick={handleEdit}>Editar</button></td>
        <td><button className="btn btn-warning" onClick={handleDelete}>Eliminar</button></td>
    </tr>
    )
}
export default Tablapersonaje;