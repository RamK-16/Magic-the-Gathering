const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res) => {
  const card = await Card.findAll();
  res.render('index', { card });
});
router.get('/card/:id', async (req, res) => {
  const card = await Card.findByPk(Number(req.params.id));
  res.render('posts', { card });
})
// router.post('/', (req, res) => {
//   res.render('index');
// });

module.exports = router;
