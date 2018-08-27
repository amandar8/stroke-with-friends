const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.SOCKET_SERVER || 8000;

app.use(express.static(__dirname + '/public'));

let history = [];

// event handler for incoming connections
io.on('connection', (socket) => {

        socket.emit('draw', {
            data: history,
        });

    // add handler "draw_line" event.
    socket.on('draw', (data) => {
        if (data.delete === true) {
            history = [];
        }
        else {
            history.push(data);
        }
        if (history.length > 0) {
            let slicedHistory = history.slice(data.index, history.length);
            io.emit('draw', {
                data: slicedHistory,
            });
        }
        else {
            io.emit('draw', {
                data: history,
            }); 
        }
    });

});
io.listen(port);
console.log('listening on port ', port);

module.exports = socketServer;
