// src/domain/entities/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../infra/database/sequelize'); 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  schema: 'accounts',
  timestamps: false
});

module.exports = User;
