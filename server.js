const cors = require('cors');
const http = require("http");
const crypto = require('crypto');
const express = require('express');
const { Server } = require("socket.io");
const bodyParser = require("body-parser");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors({origin: 'http://localhost:3000'}));
//app.use(express.static(path.join(__dirname,'public')));

let BOARDS = {};
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    /*console.log(`User Connected: ${socket.id}`);*/

    socket.on("joinBoard", (data) => {
        console.log("USER JOINED",data);
        socket.join(data.board);
    });

    socket.on("sDraw", (data) => {
        socket.to(data.board).emit("rDraw", data);
    });
});


app.post("/board",(req,res)=>{
    console.log("USER CONNECTED TO THE BOARD");
    if(req.body.checkBoard){
        if(BOARDS[req.body.id]) res.sendStatus(200);
        else res.sendStatus(404);
        return;
    }
});

app.post("/",(req,res)=>{
    if(req.body.createBoard){
        let hash = crypto.createHash('md5').update((new Date()).toLocaleString(undefined,{timeZone: 'Asia/Kolkata'})+crypto.randomInt(1000)).digest('hex');
        BOARDS[hash] = { "canvas":{} };
        res.send(`${hash}`);
        return;
    }
});

server.listen(process.env.SERVER_PORT,()=>{
    console.log(`SERVER STARTED (PORT:${process.env.SERVER_PORT})`);
})