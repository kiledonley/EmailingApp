require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.DB_PORT || 3000
const bodyParser = require("body-parser")
// const middleWare = require("./middleware/example.middleware")
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const documents = {};

app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/Dmail"))
// app.use("", middleWare)
// app.search("/posts", postRoutes);


app.get('/', (req,res)=>{
    res.sendFile('/dist/Dmail/index.html', {root: ___dirname + "/"})
})

io.on("connection", socket => {
    let previousId;
    const safeJoin = currentId => {
      socket.leave(previousId);
      socket.join(currentId);
      previousId = currentId;
    };
  
    socket.on("getDoc", docId => {
      safeJoin(docId);
      socket.emit("document", documents[docId]);
    });
  
    socket.on("addDoc", doc => {
      documents[doc.id] = doc;
      safeJoin(doc.id);
      io.emit("documents", Object.keys(documents));
      socket.emit("document", doc);
    });
  
    socket.on("editDoc", doc => {
      documents[doc.id] = doc;
      socket.to(doc.id).emit("document", doc);
    });
  
    io.emit("documents", Object.keys(documents));
  });

http.listen(3000, function(){
    console.log('listening on *:3000');
  });
app.get('/*', (req,res)=>{
    res.send('back');
})

app.listen(port);
