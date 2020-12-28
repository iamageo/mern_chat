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

const app = require('./app')

app.listen(8000, () => {s
    console.log("------------------------------")
    console.log('Servidor rodando na porta 8000')
    console.log("------------------------------")
})