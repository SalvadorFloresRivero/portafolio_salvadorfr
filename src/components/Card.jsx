import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import imagen1 from '../assets/project1.PNG'
//import imagen2 from '../assets/crud.PNG'
//import imagen3 from '../assets/dashboard.PNG'
const proyectos = require("../data/proyectos");


function CardPortafolio() {
  return (
    <>
    {
        proyectos.map( (proy) => {
            return (

            <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={proy.imagen} />
            <Card.Body>
                <Card.Title>{proy.titulo}</Card.Title>
                <Card.Text>
                {proy.descripcion}
                </Card.Text>
                <Button variant="outline-warning" href={ proy.urlDespliegue } target="_blank">Ir a sitio</Button>
                <Button variant="outline-warning" href={ proy.urlRepositorio } target="_blank">Repositorio</Button>
            </Card.Body>
            </Card>

            )
        } )
    }
    </>
  )
}

export default CardPortafolio;