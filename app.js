const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Setando rotas
app.use("/user", require('./routes/user'));

app.use("/chatroom", require('./routes/chatroom'));


//Setup erros handlers
const errorHandlers = require("./handlers/errorHandler")
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongoseErrors);
if(process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors);

} else {
    app.use(errorHandlers.productionErrors)
}

module.exports = app;