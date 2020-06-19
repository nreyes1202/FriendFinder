var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        //console.log (req.body)
        res.json(req.body)

        var i;

        //Outer loop to access individual friends
        for (i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i])
            console.log(req.body)
        //Inner loop to access friends' scores
          //  friendsData[i];
          //  friendsData[i].scores
          var totalScore = 0;
            for (j = 0; j < friendsData[i].scores.length; j++) {
               totalScore += friendsData[i].scores[j] = req.body.scores[j]
            }
            console.log(totalScore)
        };
    

    });


}

//make a jquery ajax call to API route to get survey results from survey.html