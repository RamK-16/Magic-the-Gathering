const router = require('express').Router();
const { City } = require('../db/models');

router.get('/', async (req, res) => {
  const cities = await City.findAll();
  res.json(cities);
});

module.exports = router;
