const router = require("express").Router();
const {Stock} = require("../../models")

router.get('/', async (req, res) => {
    // find all stocks
    try {
      const stockdata = await Stock.findAll();
      res.status(200).json(stockdata);
    } catch (err) {
      res.status(500).json.apply(err);
    }
    // be sure to include its associated Products
  });

  module.exports = router;