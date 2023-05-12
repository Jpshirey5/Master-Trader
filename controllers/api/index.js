const router = require('express').Router();
const stockRoutes = require('./stock-routes');
const companyRoutes = require('./company-routes')

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);
router.use('/stock', stockRoutes);
router.use('/company', companyRoutes);


module.exports = router;
