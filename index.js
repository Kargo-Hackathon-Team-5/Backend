const express = require('express')
const driverController = require('./controllers/driver.js')
const app = express()
const port = 3000

app.use(express.json());
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