const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));


let line_history = [];

// event handler for incoming connections
io.on('connection', (socket) => {

    for (let i in line_history) {
        socket.emit('draw_line', {
            line: line_history[i]
            
        });
        console.log(line_history[i]);
    }

    // add handler "draw_line" event.
    socket.on('draw_line', (data) => {

        //add recieved line to history
        line_history.push(data.line);

        // send line to all clients
        io.emit('draw_line', {
            line: data.line
        });
        console.log(data.line);

    });
});
io.listen(port);
console.log('listening on port ', port);
