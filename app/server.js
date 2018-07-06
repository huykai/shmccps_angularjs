var connect = require('connect'),serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("."));
app.listen(5000);

// Print the followed info on console
console.log('Server running at http://127.0.0.1:5000/');