var express = require("express");
var helmet = require("helmet");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var start = new Date()
var simulateTime = 1000

setTimeout(function(argument) {
  // execution time simulated with setTimeout function
  var end = new Date() - start
  console.info('Execution time: %dms', end)
}, simulateTime)

var app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "Profsend is secure",
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    },
  })
);
app.set("port", process.env.PORT || 3000);
app.use("/", express.static(__dirname + "/public"));
app.use("/script", express.static(__dirname + "/public/script"));
app.use("/image", express.static(__dirname + "/public/image"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/font", express.static(__dirname + "/public/font"));
app.use("/", require("./router.js"));

app.listen(app.get("port"));
