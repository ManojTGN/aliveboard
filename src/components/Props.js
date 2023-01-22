import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

function Props({tool, prop, setProp}){
    if(tool === 0)
    return (
        <div>
            <p>Paint Brush ( <i className="fa-solid fa-paintbrush"></i>  )</p>
            <Card>
                <p className="text-muted" style={{margin:'5px'}}>Preview</p>
                <Card.Body style={{overflow:'hidden',justifyContent:'center',display:'flex',alignItems:'center'}}>
                    <svg height="30px">
                        <path className="draw-path" strokeLinejoin="round" strokeWidth={prop.brush.size} stroke={prop.brush.color} d=" M 2 6 L 3 6 L 4 6 L 6 6 L 8 6 L 11 6 L 15 6 L 20 6 L 27 6 L 35 6 L 44 6 L 54 6 L 63 6 L 71 6 L 79 6 L 87 6 L 94 6 L 99 6 L 103 6 L 108 6 L 112 6 L 116 6 L 119 6 L 123 6 L 126 6 L 129 6 L 132 6 L 136 6 L 139 6 L 142 6 L 146 6 L 149 6 L 153 6 L 157 6 L 160 6 L 163 6 L 166 6 L 170 6 L 173 6 L 177 6 L 180 6 L 182 6 L 185 6 L 187 6 L 189 6 L 190 6 L 191 6 L 192 6 L 193 6 L 194 6 L 195 6 L 196 6 L 197 6 L 198 6 L 199 6 L 201 6 L 204 6 L 206 6 L 208 6 L 210 6 L 211 6 L 213 6"></path>
                    </svg>
                </Card.Body>
            </Card><br/>
            <Row>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Text> Size </InputGroup.Text>
                    <Form.Control onChange={(e)=>{ setProp({'brush':{...prop['brush'],size:e.target.value}}); }} value={prop['brush']['size']} placeholder="px"/>
                </InputGroup>
                </Col>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Text> Gap </InputGroup.Text>
                    <Form.Control onChange={(e)=>{ setProp({'brush':{...prop['brush'],gap:e.target.value}}); }} value={prop['brush']['gap']} placeholder="px"/>
                </InputGroup>
                </Col>
            </Row>

            <p>Color</p>
            <Row>
                <Col className="text-muted">Pick Custom</Col>
                <Col>
                <input onChange={(e)=>{ setProp({'brush':{...prop['brush'],color:e.target.value}}) }} value={prop['brush']['color']}  style={{width:'100%', height:'30px',marginTop:'-2px', border:'0', backgroundColor:prop['color']}} type="color"  />
                </Col>
            </Row>
            <br/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Container>
                <Row>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#C780FA"}});} } style={{border: prop.brush.color === "#C780FA"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#C780FA'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#FD8A8A"}})} } style={{border: prop.brush.color === "#FD8A8A"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#FD8A8A'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#F1F7B5"}})} } style={{border: prop.brush.color === "#F1F7B5"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#F1F7B5'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#C4DFAA"}})} } style={{border: prop.brush.color === "#C4DFAA"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#C4DFAA'}} variant="light"> </Button> </Col>
                </Row>
                <p/>
                <Row>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#8CC0DE"}})} } style={{border: prop.brush.color === "#8CC0DE"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#8CC0DE'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#716F81"}})} } style={{border: prop.brush.color === "#716F81"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#716F81'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#8F4068"}})} } style={{border: prop.brush.color === "#8F4068"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#8F4068'}} variant="light"> </Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],color:"#9dcc56"}})} } style={{border: prop.brush.color === "#9dcc56"?'2px solid var(--bs-primary)':'0', height:'30px',width:'30px',backgroundColor:'#9dcc56'}} variant="light"> </Button> </Col>
                </Row>
                </Container>
            </div>
            <p>Brushes</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <Container>
                <Row>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:0}})} } style={{ backgroundColor: prop['brush']['brush'] === 0 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 0 ? 'white' : ''}} variant="light"><i className="fa-solid fa-circle"></i></Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:1}})} } style={{ backgroundColor: prop['brush']['brush'] === 1 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 1 ? 'white' : ''}} variant="light"><i className="fa-solid fa-square"></i></Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:2}})} } style={{ backgroundColor: prop['brush']['brush'] === 2 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 2 ? 'white' : ''}} variant="light"><i className="fa-solid fa-star"></i></Button> </Col>
                </Row>
                <Row>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:3}})} } style={{ backgroundColor: prop['brush']['brush'] === 3 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 3 ? 'white' : ''}} variant="light"><i className="fa-solid fa-heart"></i></Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:4}})} } style={{ backgroundColor: prop['brush']['brush'] === 4 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 4 ? 'white' : ''}} variant="light"><i className="fa-solid fa-bolt"></i></Button> </Col>
                    <Col> <Button onClick={ ()=>{setProp({'brush':{...prop['brush'],brush:5}})} } style={{ backgroundColor: prop['brush']['brush'] === 5 ? 'var(--bs-secondary)' : '',color: prop['brush']['brush'] === 5 ? 'white' : ''}} variant="light"><i className="fa-solid fa-caret-up"></i></Button> </Col>
                </Row>
                </Container>
            </div>
            <br/>
            <div key={`default-checkbox`} className="mb-3">
            <Form.Check 
                type={`checkbox`}
                label={`Border`}
                checked={prop['brush']['border']}
                onClick={()=>{ setProp({'brush':{...prop['brush'],border:!prop.brush.border} });}}
                onChange={()=>{}}
            />
            </div>
            <Row>
                <Col>
                <InputGroup className="mb-3">
                    <InputGroup.Text > Size </InputGroup.Text>
                    <Form.Control onChange={(e)=>{ setProp({'brush':{...prop['brush'],'border-width':e.target.value}}) }} value={prop['brush']['border-width']} placeholder="px"/>
                </InputGroup>
                </Col>
                <Col>
                    <input onChange={(e)=>{ setProp({'brush':{...prop['brush'],'border-color':e.target.value}}) }} value={prop['brush']['border-color']} style={{width:'100%', height:'30px', border:'0', backgroundColor:prop['color']}} type="color"/>
                </Col>
            </Row>

        </div>
    );
    
    if(tool === 1)
    return (
        <p>Tool 2</p>
    );


    return(
        <div>
            <i className="fa-regular fa-circle-question"></i> Select A Tool To View Its Properties
        </div>
    )
}

export default Props;