const express = require("express");
const app = express();

const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);


app.use(express.static("public_html"));

app.get("/", function(req, res){
    res.sendFile(path.resolve("public_html/index.html"));
})


io.on("connection", client => {
    client.on("message", mensagem => {
        console.log(mensagem)
        client.emit("message", "Fala meu brother, aqui é o seu servidor")
    });
});


http.listen("80", function(){
    console.log("Servidor ativo na porta 80");
});