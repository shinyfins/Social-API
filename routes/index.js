const router = require('express').Router();

const htmlRoutes = require('./html/html-routes');


router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>yowzaa that a 404 Error!</h1>');
});

module.exports = router; 
