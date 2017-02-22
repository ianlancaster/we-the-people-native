const express = require('express')
const app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, url')
  next()
})

app.use(require('./routes/bills'))
app.use(require('./routes/bill'))

const server = app.listen(3000, () => { // eslint-disable-line
  console.log('express server listening on port 3000')
})

module.exports = app
