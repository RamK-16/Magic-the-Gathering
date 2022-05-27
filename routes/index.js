const router = require('express').Router();
const { Card, User, Post } = require('../db/models');

router.get('/', async (req, res) => {
  const card = await Card.findAll();
  res.render('index', { card });
});
router.get('/card/:id', async (req, res) => {
  const postThisCard = await Post.findAll({
    where: { card_id: Number(req.params.id) },
  });
  console.log(postThisCard);
  const card = await Card.findByPk(Number(req.params.id));
  res.render('posts', { card, postThisCard });
});

router.post('/selectCard', async (req, res) => {
  console.log('----sdfsdf', req.body);
  const card = await Card.findOne({ where: { name: req.body.card } });
  const cardId = card.id;
  if (cardId) {
    res.json({cardId});
  }
});
// router.post('/', (req, res) => {
//   res.render('index');
// });

module.exports = router;
