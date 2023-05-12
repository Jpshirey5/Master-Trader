const router = require("express").Router();
const {Company} = require("../../models")

router.get('/', async (req, res) => {
    // find all stocks
    try {
      const companydata = await Company.findAll();
      res.status(200).json(companydata);
    } catch (err) {
      res.status(500).json.apply(err);
    }
    // be sure to include its associated Products
  });

  module.exports = router;