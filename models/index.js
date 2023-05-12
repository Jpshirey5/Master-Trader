const User = require('./User');
const Stock = require('./Stock');
const Company = require('./Company');

Company.hasOne(Stock, {
  foreignKey: 'company_id',
});

Stock.belongsTo(Company, {
  foreignKey: 'company_id',
});

module.exports = { User, Stock, Company };
