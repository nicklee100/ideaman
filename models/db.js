//place where i connect to existing db and export

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/ideaman');

module.exports = db;
