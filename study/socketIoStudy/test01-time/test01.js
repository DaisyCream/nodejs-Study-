var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var html = fs.readFileSync('index.html', 'utf-8');


function handler(req, res){
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content.Length', Buffer.byteLength(html, 'utf8'));
    res.end(html);
}

function tick(){
    var now = new Date().toUTCString();
    io.sockets.send(now);
}

//io.sockets.on('connect', function(socket){
//    console.log(socket);
//});

setInterval(tick, 1000);

app.listen(8888,function(){
    console.log('Server running at 127.0.0.1:8888/');
});