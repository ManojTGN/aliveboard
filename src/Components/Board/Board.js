import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { io } from 'socket.io-client';
import Sketch from "react-p5";
import P5 from "p5";

const socket = io.connect(`${process.env.REACT_APP_PUBLIC_URL}:${process.env.REACT_APP_SERVER_PORT}`);

export default function Board({prop,tool}){
    let { id } = useParams();
    const navigate = useNavigate();
    const [lpos,setLpos] = useState({x:-1,y:-1});
    
    useEffect(()=>{
        Axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}:${process.env.REACT_APP_SERVER_PORT}/board`,
        {'checkBoard':true, 'id':id}
        )
        .then((res)=>{
            if(res.status !== 200){
                console.log("%c Server Is Not Responding 💔","color:red;font-weight:bold;font-size:20px;background-color:black;");
                console.log(`%c Server Status: ${res.status}`,"color:red;");
                return;
            }
        })
        .catch((err) => {
            console.log("%c Unable To Communicate With The Server 😥","color:red;font-weight:bold;font-size:20px;background-color:black;");
            console.log(`%c Error:\n${err}`,"color:red;");
            //navigate(`/404`);
            navigate('../');
        });

    },[navigate,id]);



    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.background(255);

        socket.emit('joinBoard',{board:id});
        socket.on('rDraw',(data)=>{
            p5.colorMode(p5.HSL, 360);
            p5.noStroke();

            p5.fill(data.color);
            p5.ellipse(data.x, data.y, data.size, data.size);

            p5.stroke(data.color);
            p5.strokeWeight(data.size);
            p5.line(data.lx,data.ly,data.x,data.y);
        });
	};

    function getEmit(p5:P5,type){
        if(tool === 0)
        return({
            board:id,
            user:"ManojTGN",
            type:"brush",
            x:p5.mouseX,
            y:p5.mouseY,
            lx:lpos.x,
            ly:lpos.y,
            color:prop.brush.color,
            size:prop.brush.size
        });

        if(tool === 1)
        return({
            board:id,
            user:"ManojTGN",
            type:"eraser",
            x:p5.mouseX,
            y:p5.mouseY,
            size:prop.eraser.size
        });
    }

    function brush(p5:P5){
        p5.colorMode(p5.HSL, 360);
        if(!prop.brush.border) p5.noStroke();

        p5.fill(prop.brush.color);
        p5.ellipse(p5.mouseX, p5.mouseY, prop.brush.size, prop.brush.size);

        if(prop.brush.border){
            p5.strokeCap(p5.SQUARE);
            p5.smooth();
            p5.stroke(prop.brush.borderColor);
            p5.strokeWeight(prop.brush.size + prop.brush.borderWidth);
            p5.line(lpos.x,lpos.y,p5.mouseX,p5.mouseY);
            p5.noSmooth();
        }

        p5.stroke(prop.brush.color);
        p5.strokeWeight(prop.brush.size);
        p5.line(lpos.x,lpos.y,p5.mouseX,p5.mouseY);

        setLpos({x:p5.mouseX,y:p5.mouseY,});
    }

    function eraser(p5:P5){
        p5.noStroke();

        p5.fill(prop.eraser.color);
        p5.ellipse(p5.mouseX, p5.mouseY, prop.eraser.size, prop.eraser.size);

        p5.stroke(prop.eraser.color);
        p5.strokeWeight(prop.eraser.size);
        p5.line(lpos.x,lpos.y,p5.mouseX,p5.mouseY);

        setLpos({x:p5.mouseX,y:p5.mouseY});
    }

    const mousePressed = (p5:P5) => {
        setLpos({x:p5.mouseX,y:p5.mouseY});
    }

    const mouseReleased = (p5:P5) => {
        setLpos({x:-1,y:-1});
    }

    const mouseDragged = (p5:P5) => {
        if(tool === -1) return;

        if      (tool ===  0) brush(p5);
        else if (tool ===  1) eraser(p5);
        socket.emit('sDraw',getEmit(p5,tool));
    }
    
    /*
	const draw = (p5) => {
		p5.background(0);
	};
    */

    return (
        <Sketch setup={setup} /*draw={draw}*/ mousePressed={mousePressed} mouseReleased={mouseReleased} mouseDragged={mouseDragged}/>
    );
}