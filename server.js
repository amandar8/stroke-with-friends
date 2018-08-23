'use strict'; 

/* eslint-env node */

require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 8000;

const app = express();

// const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride("_method"));

// app.use('/', indexRoute);
app.use('/users', usersRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'index.html')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

const http = require('http').Server(app);
const io = require('socket.io')(http);
// const port = 8000;

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

app.listen(port);
console.log(`Listening on port: ${port}`);

module.exports = app;
