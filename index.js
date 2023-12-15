const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use('/',require(path.join(__dirname,"routes/portfolio.js")))
app.use('/portfolio',require(path.join(__dirname,"routes/portfolio.js")))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})