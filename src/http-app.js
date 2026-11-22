import http from 'node:http'

export function createApp() {
  return http.createServer((req, res) => {
    // Route 1: Return plain text
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end('Hello World\n')
      return
    }

    // Route 2: Return JSON (NEW)
    if (req.method === 'GET' && req.url === '/api/hello') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Hello World' }))
      return
    }

    // No matching routse: Return 404
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not Found\n')
  })
}
