// Import the required modules
const http = require('http');
const fs = require('fs');

// Set the port and hostname of the server
const port = 8080;
const hostname = 'localhost';

// Create the server
const server = http.createServer((req, res) => {
  // Read the index.html file and return it as the response
  fs.readFile('index.html', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

