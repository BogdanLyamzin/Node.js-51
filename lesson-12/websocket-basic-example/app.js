const ws = new require("ws");

const wsServer = new ws.Server({port: 5000});
// button.addEventListener("click", function(e){})
const socketList = [];
wsServer.on("connection", (socket)=> {
    socketList.push(socket);
    setTimeout(()=> {
        socket.send("Welcome to server")
    }, 3000)
    // console.log("New frontend connected");
    socketList.forEach(item => {
        if(item !== socket){
            item.send("New member connected")
        }
    })
})