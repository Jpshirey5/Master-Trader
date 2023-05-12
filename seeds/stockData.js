const { Stock } = require('../models');

const stockdata = [
  {
    name: 'AAPL',
    high_price: 164,
    low_price: 162,
    company_id: 1
  },
  {
    name: 'IBM',
    high_price: 12,
    low_price: 128,
    company_id: 2
  },
  {
    name: 'MSFT',
    high_price: 290,
    low_price: 283,
    company_id: 3
  },
  {
    name: 'TSLA',
    high_price: 186,
    low_price: 182,
    company_id: 4
  },
  {
    name: 'BA',
    high_price: 213,
    low_price: 212,
    company_id: 5
  },
  {
    name: 'NKE',
    high_price: 127,
    low_price: 124,
    company_id: 6
  },
  {
    name: 'AMZN',
    high_price: 102,
    low_price: 98,
    company_id: 7
  },
  {
    name: 'NFLX',
    high_price: 345,
    low_price: 339,
    company_id: 8
  },
  {
    name: 'WMT',
    high_price: 149,
    low_price: 147,
    company_id: 9
  },
  {
    name: 'F',
    high_price: 12,
    low_price: 5,
    company_id: 10
  }
];

const seedStock = () => Stock.bulkCreate(stockdata);

module.exports = seedStock;
