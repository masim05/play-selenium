const http = require('http')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World!!!')
})
// submit
app.get('/submit', (req, res) => {
    console.log(req.rawBody)
  res.send('Hello World!')
})

const web = http.createServer(app)

web.on("connection", (socket) => {
    console.log("==connection")

    data = ''
    socket.on('data', (chunk) => {
        data += chunk.toString('utf8');
    })
    socket.on("close", () => {
        console.log(data)
        console.log("==close")
    });
});

web.listen(3000, () => {
    console.log("Running")
});