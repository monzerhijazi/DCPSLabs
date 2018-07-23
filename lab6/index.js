const express = require('express');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var userService = require('./userService')

/** EXPRESS SETUP start */
const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
/** EXPRESS SETUP end */

// routes... add more below
app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.get('/users', function(req, res) {
    userService.getUsers((err, users) => res.json(users));
});

app.get('/users/:id', function(req, res) {
    console.log(parseInt(req.params.id));
    userService.getUserByID(parseInt(req.params.id), (err, user) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(user);
    });
});

app.post('/users', function(req, res) {
    var user = req.body;
    userService.addUser(user, (error, newUser) => {
        if(error) {
            return res.status(500).send(error.message);
        }
        res.json(newUser);
    })
});

// start app
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
