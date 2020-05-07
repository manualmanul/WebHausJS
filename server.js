var PORT = process.env.PORT || 3001;
var express = require("express");
var app = express();
var http = require("http").Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(PORT, function() {
  console.log(`listening on *:${PORT}`);
});