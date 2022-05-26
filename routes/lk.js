const router = require('express').Router();

const { Post, Card } = require('../db/models');

router.get('/', (req, res) => {
  res.render('lkpapka/lkLayout');
});

router.post('/addPost', async (req, res) => {
  const card = await Card.findOne({ where: { name: req.body.cardName } });
  const cardId = card.id;
  console.log(cardId);
  const newPost = await Post.create({
    card_id: cardId,
    user_id: 2,
    price: req.body.price,
    state_id: req.body.state_id,
  });
  return res.send(200);
});
module.exports = router;
