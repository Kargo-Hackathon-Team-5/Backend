const ExpressPinoLogger = require("express-pino-logger");
const restResponse = require("express-rest-response");
const bodyParser = require("body-parser");
const express = require('express')
const app = express()
const port = 3000

const truckRouter = require('./routers/truck');

const options = {
  showStatusCode: true,
  showDefaultMessage: true,
};

var pino = ExpressPinoLogger();
app.use(pino);

app.use(restResponse(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.rest.success({ data: [] });
})

app.use('/truck', truckRouter);

app.use((req, res, next) => {
  const err = new Error("");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.rest.notFound("End point not found");
  } else {
    res.rest.serverError(err.message || "Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Success Listening on port ${port}`)
})