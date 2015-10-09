var axios = require('axios');

var mcAPI         = 'http://us9.api.mailchimp.com/3.0/lists/f0668f6c23/members'
var apiKey        = 'b954f06ea363497f8908368f8f0ebcd9'

exports = module.exports = function(req, res) {

  var email = req.body.EMAIL;
  var interests = {}, data = {}, headers = {};
  
  for(var key in req.body.interests) {
    if(req.body.interests.hasOwnProperty(key)) {
      interests[key] = true;
    }
  }
  
  data = { 
    'email_address': email,
    'status': 'pending',
    'interests' : interests
  };

  config = {
    headers: {
      'Authorization': 'apikey ' + apiKey,
      'Content-Type': 'application/json'
    },
    timeout: 1000
  };
  
  axios.post(mcAPI, data, config)
    .then(function(response) {
      res.sendStatus(200)
    })
    .catch(function(err) {
      console.log(err);
      var msg = 'Sorry, we were unable to subscribe your email to our list';
      if(err.data.title == 'Member Exists') msg = 'Looks like your already subscribed!';
      if(err.data.title == 'Invalid Resource') msg = 'Unable to recognise the email domain. Are you sure it is correct?';
      res.status(err.status).send(msg);
    });
};


