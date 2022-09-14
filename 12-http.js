const http = require('http');

const server = http.createServer((req, res)=> {
  if (req.url === '/') {
    res.end('Welcome to home page')
    return;
  }
 if (req.url === '/about') {
  res.end('Here is our short history')
  return;
 }
 res.end(`
 <h1>oops!</h1>
 <p> There is no page like that!</p>
 <a href = "/"> back home</a>
 `)
 return;
})

server.listen(5000)