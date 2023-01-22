
import Draggable from 'react-draggable';
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import Props from './Props';

function Sidebar({tool,setTool,prop,setProp}){

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
            <div id="SBContainer">
            <br/>
            <Card.Subtitle className="mb-2 text-muted">Tools</Card.Subtitle>
            <Container className={"d-flex justify-content-center items-align-center"}>
                <Row md={4}>
                    <Col>
                        <Button 
                            style={{ backgroundColor: tool === 0 ? 'var(--bs-secondary)' : '',color: tool === 0 ? 'white' : '',}}
                            data-name={"Pencil"} 
                            onClick={()=>{setTool( (tool=== 0) ?-1:0)}} 
                            variant="outline-secondary" 
                        > 
                        <i className="fa-solid fa-paintbrush"></i> 
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                        style={{ backgroundColor: tool === 1 ? 'var(--bs-secondary)' : '',color: tool === 1 ? 'white' : '',}} 
                        data-name={"Eraser"} 
                        onClick={()=>{ setTool( tool===1 ?-1:1);}} 
                        variant="outline-secondary" 
                        > 
                        <i className="fa-solid fa-eraser"></i> 
                        </Button>
                    </Col>
                    <Col>
                        <Button 
                        data-name={"Undo"} 
                        onClick={()=>{setTool(tool===2?-1:2);}} 
                        variant="outline-secondary" 
                        > 
                        <i className="fa-solid fa-rotate-left"></i> 
                        </Button>
                    </Col>
                </Row>
            </Container>
            <hr />

            <Card.Subtitle className="mb-2 text-muted">Properties</Card.Subtitle>
            <Props tool={tool} prop={prop} setProp={setProp}/>
            <hr />
            </div>
        </Card.Body>
        </Card>
        </Draggable>
    </>
    );
}

export default Sidebar;