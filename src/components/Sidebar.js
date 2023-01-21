
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Draggable from 'react-draggable';
import Container from 'react-bootstrap/Container';

function Sidebar({tool,setTool}){
    
    const CardStyle={
        width: '18rem',
        height: '700px',

        position:'absolute',
        top:'20px',
        left:'20px',
        transform:'translate(0%,-50%)'
    }

    return(
    <>
        <Draggable handle="#handle">
        <Card style={CardStyle}>
        <Card.Body>
            <Card.Title id="handle" style={{cursor:'all-scroll'}}>
                <Container>
                    <Row>
                        <Col sm={8} className="text-start d-flex align-items-center">Alive Board</Col>
                        <Col sm={4} className="d-flex align-items-end justify-content-end">
                            <Button variant="outline-secondary" size="sm">
                            <i className="fa-solid fa-gear"></i>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Title>
            <hr />

            <Card.Subtitle className="mb-2 text-muted">Tools</Card.Subtitle>
            <Container className={"d-flex justify-content-center items-align-center"}>
                <Row md={4}>
                    <Col>
                        <Button style={{ backgroundColor: tool === 0 ? 'var(--bs-secondary)' : '',color: tool === 0 ? 'white' : '',}} data-name={"Pencil"} onClick={()=>{setTool(0)}} variant="outline-secondary" > <i className="fa-solid fa-paintbrush"></i> </Button>
                    </Col>
                    <Col>
                        <Button style={{ backgroundColor: tool === 1 ? 'var(--bs-secondary)' : '',color: tool === 1 ? 'white' : '',}} data-name={"Eraser"} onClick={()=>{setTool(1)}} variant="outline-secondary" > <i className="fa-solid fa-eraser"></i> </Button>
                    </Col>
                    <Col>
                        <Button data-name={"Undo"} onClick={()=>{setTool(2)}} variant="outline-secondary" > <i className="fa-solid fa-rotate-left"></i> </Button>
                    </Col>
                </Row>
            </Container>
            <hr />

            <Card.Subtitle className="mb-2 text-muted">Properties</Card.Subtitle>
            <Card.Text>
            <i className="fa-regular fa-circle-question"></i> Select A Tool To Show Its Properties.
            </Card.Text>
            <hr />

            <Card.Subtitle className="mb-2 text-muted">Todo</Card.Subtitle>
        </Card.Body>
        </Card>
        </Draggable>
    </>
    );
}

export default Sidebar;