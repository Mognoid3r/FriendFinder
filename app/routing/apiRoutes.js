// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var router = require("express").Router();


module.exports = function(app) {


// ===============================================================================
// ROUTING
// ===============================================================================
// API GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
// ---------------------------------------------------------------------------

app.get("/api/friends", function(req, res) {
            res.json(friends);
});


// API POST Requests
// Below code handles when a user submits a form and thus submits data to the server.
// In each of the below cases, when a user submits form data (a JSON object)
// ...the JSON is pushed to the appropriate JavaScript array
// (ex. User fills out a reservation request... this data is then sent to the server...
// Then the server saves the data to the tableData array)
// ---------------------------------------------------------------------------

router.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    var friendMatch = {
        name: "",
        photo: "",
        compatibility: ""
    }
    
    var user = req.body;
    var userRating = user.rating;

    var comparison;

    for (var i = 0; i < friends.length; i++) {
        var currentUser = friends[i];
        comparison = 0;

        for (var j=0; j < currentUser.rating.length; j++) {
            var currentFriendRating = currentUser.rating[j];
            var currentUserRating = userRating[j];
            differenceOfScore += Math.abs(parseInt(currentUserRating) - parseInt(currentFriendRating));
        }

        if (differenceOfScore <= friendMatch.compatibility) {
            friendMatch.name = currentUser.name;
            friendMatch.photo = currentUser.photo;
            friendMatch.compatibility = currentUser.compatibility;
        }
    }
    
    friends.push(user);
    res.json(friendMatch);

// ---------------------------------------------------------------------------

});
};