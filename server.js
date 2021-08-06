var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html>
                  <body>
                  <h1>This is home Page.</h1>
                  <form action="/student" method="post">
                  <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required>

                    <button type="submit">Login</button>
                  </form>
                  </body>
                  </html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>This is student Page.</h2></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h3>This is admin Page.</h3></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

//server.listen(8081); //6 - listen for any incoming requests
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log('Hello world listening on port', port);
});
