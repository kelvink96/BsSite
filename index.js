const http = require('http')
const port = 8000

const requestHandler = (request, response) => {
    console.log(request.url)
    response.send('index.html')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})