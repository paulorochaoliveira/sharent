const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./backend/app');
const socketio = require('socket.io');

const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)){
        return val;
    } 

    if (port >= 0){
        return port;
    }

    return false;
}

const onError = error => {
    if(error.syscall !== "listen"){
        throw error;
    }

    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch(error.code) {
        case "EACCESS":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("listening on " + bind);
}

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
const io = socketio(server);

server.on("error", onError);
server.on("listening", onListening);

var connectedUsers = {};

io.on('connection', (socket) => {
    console.log('New Websocket connection');

    socket.emit('message', 'Welcome!');

    /*Register connected user*/
    socket.on('register', function(username) {
        socket.username = username;
        connectedUsers[username] = socket;
    });

    /*Private chat*/
    socket.on('private_chat', function(data){
        const to = data.to;
        const from = data.from;
        const message = data.message;

        if(to in connectedUsers){
            console.log(true);
            connectedUsers[to].emit('private_chat',{
                //The sender's username
                username : socket.username,

                //Message sent to receiver
                message : message
            });
            connectedUsers[from].emit('private_chat',{
                //The sender's username
                username : socket.username,

                //Message sent to receiver
                message : message
            });
        }

    }); 



    // socket.on('sendMessage', (message) => {
    //     io.emit('message' , message);
    // })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});