var express = require('express');
var bodyParser = require('body-parser');
var messagesController = require('./server/controllers/messages_controller');
var baseURL = '/api/messages';

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/build'));

app.post(baseURL, messagesController.create);
app.get(baseURL, messagesController.read);
app.put(baseURL + '/:id', messagesController.update);
app.delete(baseURL + '/:id', messagesController.delete);

app.listen(3000, () => console.log('We are running on port 3000'));
