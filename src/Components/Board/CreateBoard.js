import Axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBoard(){
    const navigate = useNavigate();


    useEffect(()=>{

        Axios.post(
        `${process.env.REACT_APP_PUBLIC_URL}:${process.env.REACT_APP_SERVER_PORT}/`,
        {'createBoard':true}
        )
        .then((res)=>{
            if(res.status !== 200){
                console.log("%c Server Is Not Responding 💔","color:red;font-weight:bold;font-size:20px;background-color:black;");
                console.log(`%c Server Status: ${res.status}`,"color:red;");
                return;
            }
            navigate(`/board/${res.data}`);
            return;
            
        })
        .catch((err) => {
            console.log("%c Unable To Communicate With The Server 😥","color:red;font-weight:bold;font-size:20px;background-color:black;");
            console.log(`%c Error:\n${err}`,"color:red;");
        });

    },[navigate]);

    return (
    <>
    <p>
        <strong>Creating Your Board</strong>
        <br/> Please Wait
    </p>
    </>
    );
}