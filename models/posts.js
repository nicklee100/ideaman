//define models http://docs.sequelizejs.com/en/2.0/docs/models-definition/
// auto adds createdAt and updatedAt dates

const Sequelize = require('sequelize');
const db = require('./db');

const idea =  db.define('idea',{
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        unique: true,
        allowNull: false
    },
    type: {  // type eq, nonprofit, forprofit, other
        type: Sequelize.STRING,
        allowNull: false
    }
});

const user = db.define('user',{
    nameName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    phoneNum: {
        type: Sequelize.INTEGER,   // need to varify somewhere that its a valid phone number
        unique: true,
        allowNull: true
    }
});


module.exports = idea;
