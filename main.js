const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public_html"));

app.get("/", function(req, res){
    res.sendFile(path.resolve("public_html/index.html"));
})

app.listen("80");