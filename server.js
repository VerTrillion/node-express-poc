const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

let info = "Hello World!"

app.get('/info', (req, res) => {
  res.send(info)
})

app.post('/info', (req, res) => {
  info = req.body?.info
  res.send(info)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})