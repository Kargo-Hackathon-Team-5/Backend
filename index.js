const ExpressPinoLogger = require("express-pino-logger")
const restResponse = require("express-rest-response")
const bodyParser = require("body-parser")
const express = require('express')
const cors = require("cors");

const app = express()
const port = 3000

const truckRouter = require('./routers/truck')
const driverRouter = require('./routers/driver')
const shipmentRouter = require('./routers/shipment')
const serviceRouter = require('./routers/service')

const options = {
  showStatusCode: true,
  showDefaultMessage: true,
};

const pino = ExpressPinoLogger();

app.use(pino);
app.use(cors())
app.use(restResponse(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// App Router
app.get('/api', (req, res) => { res.rest.success({ data: "Health Check OK" }) })
app.use('/api/service', serviceRouter);
app.use('/api/truck', truckRouter);
app.use('/api/driver', driverRouter);
app.use('/api/shipment', shipmentRouter);


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


// App Running
app.listen(port, () => {
  console.log(`Success Listening on port ${port}`)
})

module.exports = app