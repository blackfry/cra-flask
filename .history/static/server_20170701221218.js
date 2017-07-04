const http = require('http');
const express = require('express');
const httpProxy = require('http-proxy');
const path = require('path');

const proxy = httpProxy.createProxyServer({});

const app = express();

app.use(require('morgan')('short'));

app.all(/^\/api\/(.*)/, (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:5000' });
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    const address = server.address();
    console.log('Listening on: %j', address);
    console.log(' -> that probably means: http://localhost:%d', address.port);
});
