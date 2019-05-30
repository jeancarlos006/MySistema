const express = require("expresse");
const app = express();
const {controller} =require("./Controller");
const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.get("/", (req, res)=>{
    res.send('hola muchachos, juicio juicio se van a matar!');
})

app.get("/users", (req, res)=>{
    controller.getUsers(res);
})

exports.app = app;