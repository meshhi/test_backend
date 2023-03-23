const { Model, DataTypes } = require("sequelize");
const sequelize = require('./db-connection');

class Person extends Model {};

Person.init({
  person_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  person_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  person_datebirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  person_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  person_social_rate: {
    type: DataTypes.REAL(5, 2),
    allowNull: false
  },
}, { sequelize });

class Document extends Model {};

Document.init({
  document_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  person_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Person,
      key: 'person_id',
    },
    allowNull: false
  },
  document_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  document_name2: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize });

module.exports = { sequelize, Person, Document };