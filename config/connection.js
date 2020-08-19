var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rv1do1oyr3xraa29",
  password: "mmf02yc4g7b9wl4a",
  database: "ftoo9gclaz0fwj9l"
});
connection.connect(function (err) {
  // console.log("THING");

  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// console.log("LOADED");

module.exports = connection;