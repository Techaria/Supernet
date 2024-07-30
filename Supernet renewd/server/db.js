// server/db.js
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// Connect to SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

// Define User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  package: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sync models with the database
sequelize.sync();

module.exports = {
  sequelize,
  User
};

