const express = require('express');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
var bodyParser = require('body-parser')
var data = require('./posts.js');
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
const chalk = require('chalk');
const testPost = require('./models/seed.js');


app.use(express.static(__dirname + '/public'));

app.use(morgan('combined', {stream: accessLogStream}));

app.get('/make', (req, res ) => {
    testPost.makePost();
    chalk.red(console.log(testPost.makePost));
    res.send(' new post');
});

app.get('/posts', (req, res) => {
    res.send(data);
});


app.use( (err,req,res,next) => {
    chalk.red(console.log("chalk is working"));
});

app.listen('3000', () => {
    console.log(chalk.red("serve running..."));
});
