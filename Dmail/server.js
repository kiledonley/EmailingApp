  require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require("body-parser")
// const middleWare = require("./middleware/example.middleware")
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const threads = {};
const session = require("express-session");

const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }));
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
  
    socket.on("getThread", threadId => {
      safeJoin(threadId);
      socket.emit("thread", threads[threadId]);
    });
  
    socket.on("addThread",  thread => {
      threads[thread.id] = thread;
      safeJoin(thread.id);
      io.emit("threads", Object.keys(threads));
      socket.emit("thread", thread);
    });
  
    socket.on("editThread", thread => {
      console.log(threads.id, thread.thread, thread,"edit thread")
      threads[thread.id] = thread;
      console.log(thread)
      socket.to(thread.id).emit("thread", thread);
    });
  
    io.emit("threads", Object.keys(threads));
  });

  app.get('/*', (req,res)=>{
    res.send('back');
})

http.listen(3000, function(){
    console.log('listening on *:3000');
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
// app.listen(port);
  })
  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });