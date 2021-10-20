var router = require("express").Router();
var csrf = require("csurf");
var fs = require("fs");
var csrfProtection = csrf({ cookie: false });

router.get("/", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/public/" });
});

router.get("/top.html", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/public/" });
});

router.get("/about.html", csrfProtection, function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/public/" });
});

router.get("/top", csrfProtection, function (req, res) {
  res.sendFile("top.html", { root: __dirname + "/public/" });
});

router.get("/about", csrfProtection, function (req, res) {
  res.sendFile("about.html", { root: __dirname + "/public/" });
});

router.get("/13update", csrfProtection, function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/public/" });
});
router.get("/13update.html", csrfProtection, function (req, res) {
  res.sendFile("13update.html", { root: __dirname + "/public/" });
});
router.get("/scaner", csrfProtection, function (req, res) {
  res.sendFile("scaner.html", { root: __dirname + "/public/" });
});
router.get("/business", csrfProtection, function (req, res) {
  res.sendFile("business.html", { root: __dirname + "/public/" });
});

module.exports = router;
