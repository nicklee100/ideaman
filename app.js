const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');


//middleware

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));

app.get('/', (req, res ) => {
    res.send('test');
});





app.listen('3000', () => {
    console.log('running');
});
