var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        console.log (req.body)
        res.json(req.body)
        //logic to compare user that's coming in to every friend in friendsData array
        // if else statement
        //need to loop through friendsData
    });


}
