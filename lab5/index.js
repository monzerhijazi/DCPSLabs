const express = require('express');
var bodyParser = require('body-parser')

/** EXPRESS SETUP start */
const app = express();
app.use(bodyParser.json())
/** EXPRESS SETUP end */

// routes... add more below
app.get('/', function(req, res) {
    res.send('Hello World!')
});


// start app
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
