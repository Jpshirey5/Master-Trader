const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stock extends Model {}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    high_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    low_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'company',
        key: 'id',
      },
  },
},

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stock',
  }
);

module.exports = Stock;
