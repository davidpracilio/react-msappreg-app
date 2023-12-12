const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

require('dotenv').config();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'Your express backend is connected to react!' })
})

app.get('/get_azure_token', (request, response) => {

  var https = require('follow-redirects').https;
  var fs = require('fs');
  var qs = require('querystring');

  var options = {
    'method': 'POST',
    'hostname': process.env.HOSTNAME,
    'path': process.env.HOSTPATH,
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    'maxRedirects': 20
  };
  
  var req = https.request(options, function (res) {
    var chunks = [];
  
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
  
    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      // console.log(body.toString());
      response.send({ express: body.toString()} );
    });
  
    res.on("error", function (error) {
      console.error(error);
    });
  });
  
  var postData = qs.stringify({
    'grant_type': 'client_credentials',
    'client_id': process.env.CLIENT_ID,
    'client_secret': process.env.CLIENT_SECRET,
    'scope': 'https://graph.microsoft.com/.default'
  });
  
  req.write(postData);
  
  req.end();
})