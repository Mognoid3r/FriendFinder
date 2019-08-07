// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var router = require("express").Router();


// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ---------------------------------------------------------------------------

router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};