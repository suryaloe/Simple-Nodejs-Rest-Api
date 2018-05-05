require('./config/config'); 
console.log("Environment:", CONFIG.app);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var fs = require('fs');
console.log('Load All Routes');
fs.readdirSync("./routes").forEach(function (file) {
	if (file.substr(-3) === ".js") {
		console.info("Loading Routes " + file);
		var base = "/" + path.basename(file, ".js");
    	var route = require("./routes/" + file);
    	app.use(base, route);
    	if (file == "index.js") {
			app.use('/', route);
		}
	}
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
