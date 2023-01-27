
import Draggable from 'react-draggable';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tools from './Tools';
import Property from './Property';
/*import Props from './Props';*/

export default function Sidebar({tool,setTool,prop,setProp}){

    const CardStyle={
        width: '18rem',
        height: '700px',

        position:'absolute',
        top:'20px',
        left:'20px',
        transform:'translate(0%,-50%)',
        
        transition: 'opacity 0.1s ease-in-out'
    }

    return(
    <>
        <Draggable handle="#handle">
        <Card id="SideBar" style={CardStyle}>
        <Card.Body>
            <Card.Title id="handle" style={{cursor:'all-scroll'}}>
            <Container>
            <Row>
            <Col sm={8} className="text-start d-flex align-items-center fs-4" style={{fontFamily: "'Montserrat', sans-serif"}}>Alive Board</Col>
            <Col sm={4} className="d-flex align-items-end justify-content-end">
            <Button variant="outline-secondary" size="sm">
            <i className="fa-solid fa-gear"></i>
            </Button>
            </Col>
            </Row>
            </Container>
            </Card.Title>
            <hr />

            <div id="SBContainer">
                <Card.Subtitle className="mb-2 text-muted fs-5">Tools</Card.Subtitle>
                <Container className={"d-flex justify-content-center items-align-center"}>
                    <Row md={4}>
                        <Tools tool={tool} setTool={setTool}/>
                    </Row>
                </Container>
                <hr />

                <Card.Subtitle className="mb-2 text-muted fs-5">Properties</Card.Subtitle>
                <Property tool={tool} prop={prop} setProp={setProp} />
            </div>

        </Card.Body>
        </Card>
        </Draggable>
    </>
    );
    //<Props tool={tool} prop={prop} setProp={setProp}/>
}