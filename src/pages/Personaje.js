import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Listado from "../components/Listado";

function Personaje(){
    return (
        <main>
            <Container className="text-center my-3">
        <h2>Personajes Need For Speed Most Wanted</h2>
        <Link to='/personajes/create' className="btn btn-success my-4">Registrar personaje</Link>
        <Listado/>
            </Container>
        </main>
    )
}
export default Personaje;