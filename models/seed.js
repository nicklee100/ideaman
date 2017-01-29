const db = require('./db');
const Idea = require('./posts.js'); // exporting just one idea


// sequelize.sync() will, based on your model definitions, create any missing tables.
//  If force: true it will first drop tables before recreating them.

var exports = module.exports = {};


exports.makePost = function(){
    db.sync({
        force: true,
        logging: console.log

    }).then(function(){
        Idea.create({
            title: 'The Night Truck',
            description: 'a food to serve hot food to hampsters',
            type: 'For-Profit'
        });
    }).catch(function(err){
        console.log(err + "something went wrong");
    });

}

//module.export = {makePost: makePost};
