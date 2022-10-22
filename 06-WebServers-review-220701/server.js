// importar las librerias necesarias
const fs = require("fs");
const http = require("http");

// serverHandler
const serverHandler = (req, res) => {
  let filePath = req.url;

  if (filePath === "/") filePath = "index.html"; // default response (/)

  fs.readFile(`public/${filePath}`, (error, content) => {
    res.end(content);
  });
};

// crear server
const server = http.createServer(serverHandler);

// levantar server
server.listen(3000, () => {
  console.log("server on http://localhost:3000");
});


/** ************************** serverHandler inicial **************************

const serverHandler = (request, response) => {
  if (request.url === '/') {
    fs.readFile('public/index.html', 'utf-8', (err, file) => {
      response.end(file);
    });
  }

  if (request.url === '/index.js') {
    fs.readFile('public/index.js', 'utf-8', (err, file) => {
      response.end(file);
    });
  }

  if (request.url === '/styles.css') {
    fs.readFile('public/styles.css', 'utf-8', (err, file) => {
      response.end(file);
    });
  }

  if (request.url === '/server.png') {
    fs.readFile('public/server.png', (err, file) => {
      response.end(file);
    });
  }

  if (request.url === '/favicon.png') {
    fs.readFile('public/favicon.png', (err, file) => {
      response.end(file);
    });
  }
}

*************************** serverHandler inicial ************************** **/
