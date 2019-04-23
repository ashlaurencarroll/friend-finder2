
var friends = require("../data/friends.js");
var match = require("../data/friends.js");


module.exports = function (app) {

    app.get("/data/friends", function (req, res) {
        res.json(friends);

    });

    

//app.post("/data/friends", function (req, res) {
   // var newUser = req.body;

    //match.push(newUser);

//});
}

module.exports = function(app) {
   
    app.get("/data/friends", function(req, res) {
      res.json(match);
    });
  
    app.post("/data/friends", function(req, res) {
      console.log(req.body.scores);
  
    
      var user = req.body;
  
   
      for(var i = 0; i < user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
      }
  

      var bestFriendIndex = 0;
      var minimumDifference = 50;
  
     
      for(var i = 0; i < match.length; i++) {
        var totalDifference = 0;
        for(var l = 0; l < match[i].scores.length; l++) {
          var difference = Math.abs(user.scores[l] - match[i].scores[l]);
          totalDifference += difference;
        }
  
    
        if(totalDifference < minimumDifference) {
          bestFriendIndex = i;
          minimumDifference = totalDifference;
        }
      }
  
     
      match.push(user);
  
   
      res.json(friends[bestFriendIndex]);
    });
  };