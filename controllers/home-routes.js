const router = require('express').Router();
const { Stock, Company } = require('../models');
const withAuth = require('../utils/auth')


// GET all stocks for homepage
router.get('/', withAuth, async (req, res) => {
  console.log('1')
  try {
    const dbStockData = await Stock.findAll({
      include: [
        {
          model: Company,
          attributes: ['description', 'ceo','founded','headquarters'],
        },
      ],
    });

    const stocks = dbStockData.map((stock) =>
      stock.get({ plain: true })
    );
    console.log(stocks);
    res.render('homepage', {
      stocks,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET one stock
router.get('/gallery/:id', async (req, res) => {
  try {
    const dbStockData = await Stock.findByPk(req.params.id, {
      include: [
        {
          model: Company,
          attributes: [
            'id',
            'description',
            'ceo',
            'founded',
            'headquarters',
          ],
        },
      ],
    });

    const  stock = dbStockData.get({ plain: true });
    res.render('gallery', { stock, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbCompanyData = await Company.findByPk(req.params.id);

    const company = dbCompanyData.get({ plain: true });
    res.render('painting', { company, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
