const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send('Hello Wor!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
