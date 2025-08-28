const express = require('express');

const app = express();
const createError = require('http-errors');

app.disable('etag');
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check endpoints cho Cloud Run probes
app.get('/startup', (req, res) => {
  res.status(200).send('ok');
});

app.get('/healthz', (req, res) => {
  res.status(200).send('ok');
});

app.use('/', (req, res) => res.send('Hello World123'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
