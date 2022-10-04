require('dotenv').config()
require('./config/database')

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const USER = require('./routes/usersRoutes');
const DRINK = require('./routes/coffeeDrink');
const GIFTCARD  = require('./routes/giftCardsRoutes')
const MUGS  = require('./routes/mugsRoutes')

var coffeeByKilo = require('./routes/coffeeKiloRouter')
var coffeeMachine = require('./routes/coffeeMaRouter.js')
var filters = require('./routes/FiltersRouter')
var kits = require('./routes/kitsRouter')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/coffee-kilogram', coffeeByKilo)
app.use('/coffee-machine', coffeeMachine)
app.use('/coffee-filters', filters)
app.use('/kits', kits)

// Routes for DOT COFFEE
app.use('/auth', USER)
app.use('/coffee', DRINK)
app.use('/giftcard', GIFTCARD)
app.use('/mugs', MUGS)

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
