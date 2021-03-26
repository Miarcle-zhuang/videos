const http = require('http');
const fs = require("fs");

const videos = require("./api/videos");
const city = require("./api/city");


const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.end(JSON.stringify(videos), "utf8");
  }
  else if(req.url === "/city") {
    res.end(JSON.stringify(city), "utf-8");
  }
  
});

server.listen('8000', () => {
  console.log('服务器已启动');
});