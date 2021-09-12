'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Store.init({
    name: DataTypes.STRING,
    logoUrl: DataTypes.STRING,
    address: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });

  Store.associate = (models) => {
    Store.hasMany(models.Employee, {
      foreignKey: 'storeId',
      as: 'employees',
    });
  };

  return Store;
};