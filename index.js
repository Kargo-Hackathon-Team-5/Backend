const ExpressPinoLogger = require("express-pino-logger")
const restResponse = require("express-rest-response")
const bodyParser = require("body-parser")
const express = require('express')
const driverController = require('./controllers/driver.js')
const app = express()
const port = 3000

const truckRouter = require('./routers/truck')
const driverRouter = require('./routers/driver')

const options = {
  showStatusCode: true,
  showDefaultMessage: true,
};

var pino = ExpressPinoLogger();
app.use(pino);

app.use(restResponse(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// App Router
app.get('/', (req, res) => { res.rest.success({ data: "Health Check OK" }) })
app.use('/truck', truckRouter);
app.use('/driver', driverRouter);

// Router Global Error Handling
app.use((req, res, next) => {
  const err = new Error("");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.rest.notFound("Endpoint Not Found");
  } else {
    res.rest.serverError(err.message || "Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Success Listening on port ${port}`)
})