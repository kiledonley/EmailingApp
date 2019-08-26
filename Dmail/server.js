require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require("./routes/posts.routes")
const middleWare = require("./middleware/example.middleware")

app.use(bosdyParser.json());

app.use(express.static(__dirname+"/dist"))
app.use("", middleWare)
app.search("/posts", postRoutes);

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/*', (req,res)=>{
    res.send('back');
})

app.listen(PORT);
