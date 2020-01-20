var express = require("express");
var body_parser = require("body-parser");
var app = express();
var db = require('./server.js');


// Create express app
var express = require("express")
var app = express()

// Server port
var HTTP_PORT = 8080 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  if (req.method === 'OPTIONS') {
    return res.send(204);
  }
  next();
});
// Root endpoint
app.get("/", (req, res, next) => {
    //res.json({"message":"Ok"})
});

app.get("/api/users", (req, res, next) => {
    var sql = "select * from Users"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
         res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "data":rows
        })
      });
});





