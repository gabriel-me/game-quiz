const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').createServer(app)
const questionRoutes = require('./routes/question')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/question', questionRoutes)

server.listen(8082)