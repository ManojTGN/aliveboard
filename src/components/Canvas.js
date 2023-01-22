import React, { useEffect, useRef, useState } from "react";
function Canvas({tool, prop}){

    let SideBarDom = null;
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [MouseDown,setMouseDown] = useState(false);

    let lastX,lastY;

    useEffect(()=>{
        if(canvasRef.current == null) return;
        
        canvasRef.current.width  = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const context = canvasRef.current.getContext('2d');
        context.lineCap = 'round';
        contextRef.current = context;
    },[])

    
    const handleStart = ({nativeEvent}) => {
        setMouseDown(true);

        if(SideBarDom == null)
            SideBarDom = document.getElementById("SideBar");

        contextRef.current.strokeStyle = prop.brush.color;
        contextRef.current.lineWidth = prop.brush.size;

        const {x,y} = nativeEvent;
        lastX = x;lastY = y;

        contextRef.current.beginPath();
        contextRef.current.moveTo(x,y);
        contextRef.current.stroke();

        SideBarDom.style.opacity = 0;
        setTimeout( ()=>{SideBarDom.style.top = (parseInt( SideBarDom.style.top.replace('px','') ) + 5000) + 'px';}, 100);
        nativeEvent.preventDefault();
    }

    const handleStop = () => {
        if(!MouseDown) return;
        setMouseDown(false);

        if(SideBarDom == null)
            SideBarDom = document.getElementById("SideBar");

        contextRef.current.closePath();
        SideBarDom.style.top = (parseInt( SideBarDom.style.top.replace('px','') ) - 5000) + 'px';
        SideBarDom.style.opacity = 1;
    }

    
    const handleDrag = ({nativeEvent}) => {
        if(!MouseDown) return;

        const {x,y} = nativeEvent;
        contextRef.current.rect(x, y, 23, 23);
        contextRef.current.stroke();

        nativeEvent.preventDefault();
    }

    return (
        <>
        <canvas
            ref={canvasRef}
        
            onMouseDown={ handleStart }
            onMouseUp={ handleStop }
            onMouseLeave={ handleStop }
            onMouseMove={ handleDrag }
        >
        </canvas>
        </>
    );
}

export default Canvas;