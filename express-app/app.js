var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var expressValidator = require('express-validator');
var EJSLayout = require('express-ejs-layouts');
var session = require('express-session');
var http = require('http');

var db = null;

// Express
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap-datepicker/dist/js'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap-datepicker/dist/locales'));
app.use('/styles', express.static(__dirname + '/node_modules/bootstrap-datepicker/dist/css'));
app.use('/scripts', express.static(__dirname + '/node_modules/socket.io-client'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true})
);
app.use(express.static(path.join(__dirname, 'public')));
/* Layout */
app.use(EJSLayout);

// Controllers
routes(app);

//app.use('/', index);
//app.use('/users', users);


///////
var attachDB = function(req, res, next){
  req.db = db;
  next();
};

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

let server = http.createServer(app);


/**
 * Socket.io and SerialPort
 */
const SerialPort = require('serialport');
const io = require('socket.io').listen(server);

let port = new SerialPort("COM4", {
  baudRate: 9600,
  parser: SerialPort.parsers.readline("\n")
});

io.on('connection', (socket) => {
  console.log('Socket connected');
  port.on('data', (data) => {
    console.log('Emitting: ', data);
    socket.emit('UID', data);
  });
});

module.exports = {
  app: app,
  server: server
};
