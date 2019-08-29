  require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.DB_PORT || 3000
const bodyParser = require("body-parser")
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const threads = {};
const userRoutes = require("./server/routes/userRoutes.js")

app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/Dmail"))
app.use("/api/user", userRoutes);


app.get('/', (req,res)=>{
    res.sendFile('/dist/Dmail/index.html', {root: ___dirname + "/"})
})

// io.on("connection", socket => {
//     let previousId;
//     const safeJoin = currentId => {
//       socket.leave(previousId);
//       socket.join(currentId);
//       previousId = currentId;
//     };
  
//     socket.on("getThread", threadId => {
//       safeJoin(threadId);
//       socket.emit("thread", threads[threadId]);
//     });
  
//     socket.on("addThread",  thread => {
//       threads[thread.id] = thread;
//       safeJoin(thread.id);
//       io.emit("threads", Object.keys(threads));
//       socket.emit("thread", thread);
//     });
  
//     socket.on("editThread", thread => {
//       console.log(threads.id, thread.thread, thread,"edit thread")
//       threads[thread.id] = thread;
//       console.log(thread)
//       socket.to(thread.id).emit("thread", thread);
//     });
  
//     io.emit("threads", Object.keys(threads));
//   });
io.on('connection', (socket)=>
  socket.on('chat message', (msg)=>
    io.emit('chat message', msg)
))

  app.get('/*', (req,res)=>{
    res.send('back');
})

http.listen(3000, function(){
    console.log('listening on *:3000');
  });


// app.listen(port);

