const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
var bodyParser = require('body-parser')
var data = require('./posts.js');


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});



app.use(express.static(__dirname + '/public'));

app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', (req, res ) => {
    res.send('test');
});

app.get('/posts', (req, res) => {
    res.send(data);
})




app.listen('3000', () => {
    console.log('running');
});
