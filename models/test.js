const Sequelize = require('sequelize'); // Node Module used for DB queries ( https://www.npmjs.com/package/sequelize )
const db = require('../config/db');


const Test = db.define('test', {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
    },
    first_name: {
      type: Sequelize.STRING,
    },
  });

  module.exports = Test;