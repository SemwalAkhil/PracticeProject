// basic hello world program with server
const http = require('http');
const printMessage = require('./sync_async')
const server = http.createServer(async (req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
const r3 = await printMessage.asyncTask();
const r1 = printMessage.printMessage();
const r2 = printMessage.syncTask();

res.end(r1+r2+r3);
});
server.listen(3000, () =>{
    console.log('Server running on port 30');
});