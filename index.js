const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createServer({});
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    proxy.web(req, res, {
        target: "https://www.google.com:443",
        changeOrigin: true,
        autoRewrite: true,
        hostRewrite: true
    })
})

server.listen(port);
console.log("Server running on port " + port);