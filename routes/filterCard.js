const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  const cards = await Card.findAll();
  res.json(cards);
});

module.exports = router;
