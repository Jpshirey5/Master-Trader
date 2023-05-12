const sequelize = require('../config/connection');
const seedStock = require('./stockData');
const seedCompany = require('./companyData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCompany();
  
  await seedStock();


  process.exit(0);
};

seedAll();
