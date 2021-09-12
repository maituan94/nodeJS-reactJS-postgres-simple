'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    address: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
  });

  Employee.associate = (models) => {
    Employee.belongsTo(models.Store, {
      foreignKey: 'storeId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };

  return Employee;
};