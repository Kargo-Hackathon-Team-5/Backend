const ExpressPinoLogger = require("express-pino-logger");
const restResponse = require("express-rest-response");
const bodyParser = require("body-parser");
const express = require('express')
const driverController = require('./controllers/driver.js')
const app = express()
const port = 3000

const options = {
  showStatusCode: false,
  showDefaultMessage: false,
};

var pino = ExpressPinoLogger();
app.use(pino);

app.use(restResponse(options));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/driver/', driverController.createDriver);
app.put('/driver/:id', driverController.updateDriver);
// app.post('/driver/', (req, res) => {
//   res.send({
//     message: 'Create Driver Successfully',
//     body:req.body
//   });
// })

// app.put('/driver/:id', (req, res) => {

//   const id = req.params.id;
//   const msg = {
//     message : 'Update Driver Successfully',
//     body : req.body
//   };
//   res.send(msg)
// })

app.listen(port, () => {
  console.log(`Success Listening on port ${port}`)
})