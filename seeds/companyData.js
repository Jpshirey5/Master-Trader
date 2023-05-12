const { Company } = require('../models');

const companydata = [
   {
   description: 'Apple Inc. is an American multinational technology company ',
   ceo: 'Tim Cook',
   founded: 1984,
   headquarters: 'Cupertino, California',
  },
  {
   description: 'The International Business Machines Corporation (IBM), nicknamed Big Blue,[6] is an American multinational technology corporation.',
   ceo: 'Arvind Krinshna',
   founded: 1911,
   headquarters: 'Armonk, New York',
  },
  {
    description: 'Microsoft Corporation is an American multinational technology.',
    ceo: 'Satya Nadella',
    founded: 1975,
    headquarters: 'Redmond, Washington',
  },
  {
    description: 'Tesla, Inc. is an American multinational automotive and clean energy company.',
    ceo: 'Elon Reeve Musk',
    founded: 2003,
    headquarters: 'Austin, Texas',
  },
  {
    description: 'The Boeing Company  is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, telecommunications equipment, and missiles worldwide.',
    ceo: 'David L. Calhoun',
    founded: 1916,
    headquarters: 'Arlington, Virginia',
  },
  {
    description: 'Nike, Inc.is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
    ceo: 'John J. Donahoe',
    founded: 1964,
    headquarters: 'Beverton, Oregon',
  },
  {
    description: 'Amazon.com, Inc is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.',
   ceo: 'Andrew R. Jassy',
   founded: 1994,
   headquarters: 'Seattle, Washington',
  },
  {
    description: 'Netflix, Inc. is an American media company based in Los Gatos, California.',
    ceo: 'Theodore A. Sarandos',
    founded: 1997,
    headquarters: 'Los Gatos, California',
  },
  {
    description: 'Walmart Inc. formerly Wal-Mart Stores, Inc.) is an American multinational retail corporation that operates a chain of hypermarkets (also called supercenters), discount department stores, and grocery stores in the United States,',
    ceo: 'C. Douglas McMillion',
    founded: 1946,
    headquarters: 'Bentonville, Arkansas',
  },
  {
    description: 'Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States.',
    ceo: 'James D. Farley',
    founded: 1903,
    headquarters: 'Deabron, Michigan',
  },
];

const seedCompany = () => Company.bulkCreate(companydata);

module.exports = seedCompany
