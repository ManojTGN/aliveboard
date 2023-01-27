import { Button, Col } from "react-bootstrap";

export default function Tools({tool,setTool}){
    return(
    <>
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
            style={{ backgroundColor: tool === 2 ? 'var(--bs-secondary)' : '',color: tool === 2 ? 'white' : '',}}
            data-name={"Shapes"} 
            onClick={()=>{setTool(tool===2?-1:2);}} 
            variant="outline-secondary" 
            > 
            <i className="fa-solid fa-shapes"></i> 
            </Button>
        </Col>
    </>
    );
}