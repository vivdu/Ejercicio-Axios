import { Card, Button } from "react-bootstrap";

function Cardpersonaje({personaje}) {
    return (
        <div className="col-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={personaje.foto} />
                <Card.Body>
                    <Card.Title className="text-center">{personaje.nombre}{personaje.apellido}</Card.Title>
                    <Card.Text>
                        <strong>Tipo de doc</strong>{personaje.alias}<br/>
                    </Card.Text>
                    <Button variant="primary">Ver más</Button>
                    <Button variant="secondary">Editar</Button>
                </Card.Body>
            </Card>
        </div>
    )
};
export default Cardpersonaje;