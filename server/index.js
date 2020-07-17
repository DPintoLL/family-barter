const express = require('express')
const mountRoutes = require('./routes')

const app = express()
mountRoutes(app)

const DEFAULT_PORT = 8000

const port = process.env.PORT || DEFAULT_PORT

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`)
})
