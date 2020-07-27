var express = require('express');
var bodyParser = require('body-parser');
var sg = require('sendgrid')('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');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Cache-control', 'private, no-cache, no-store, must-revalidate');
  res.header();
  next();
});
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
  response.sendfile('index.html');
});

app.post('/form', function (request, response) {
  console.log(request.body.name);
  console.log(request.body.email);
  console.log(request.body.message);

  var formResponse = response;
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: {
      personalizations: [
        {
          to: [
            {
              email: 'paulakedouk@gmail.com',
            },
          ],
          subject: 'Hire me',
        },
      ],
      from: {
        email: request.body.email,
      },
      content: [
        {
          type: 'text/plain',
          value: request.body.message,
        },
      ],
    },
  });

  sg.API(request, function (error, response) {
    if (error) {
      console.log('Error response received');
    }
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    formResponse.send('success');
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});