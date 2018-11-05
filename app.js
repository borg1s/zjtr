const express = require('express');
const app = express();








// set Port
var port = process.env.PORT || 8081;

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// include routes
var routes = require('./routes/index');
app.use('/', routes);

//check HTTPS



app.use(function(req, res, next) {
  var err = new Error('404 - File not found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



// listen on port 3000
app.listen(port, function () {
  console.log('Express app running');
});
