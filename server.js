require("dotenv").config()

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err)=> {
    console.log("Erro ao conectar ao mongodb: ", err.message)
});

mongoose.connection.once('open', () => {
    console.log("---- Conectado ao mongodb! ---")
    console.log("------------------------------")
});

//Construindo models
require('./models/User');
require('./models/ChatRoom');
require('./models/Message');

const app = require('./app');

const server = app.listen(8000, () => {
    console.log("------------------------------")
    console.log('Servidor rodando na porta 8000')
    console.log("------------------------------")
})

const io = require("socket.io")(server);
const jwt = require('jwt-then')

io.use( async (socket, next)=> {
    try {
        const token = socket.handshake.query.token;
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        socket.userId = payload.id;
        next()
    } catch (err) { 
    }
})

io.on('connection', (socket) => {
    console.log("Conectado: " + socket.userId)
    console.log("------------------------------")
   
   
    socket.on('disconnect', () => {
        console.log("Desconectado: " + socket.userId)
        console.log("------------------------------")
    })
})