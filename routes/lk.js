const router = require('express').Router();

const { Post, Card, State } = require('../db/models');

router.get('/', async (req, res) => {
  const userPosts1 = await Post.findAll({
    where: {
      user_id: 2,
    },
    attributes: ['price'],
    include: [{
      model: Card,
      attributes: ['img', 'name'],
    }, {
      model: State,
      attributes: ['name'],
    }],
  });
  const userPosts = JSON.parse(JSON.stringify(userPosts1));
  res.render('lkpapka/lkLayout', { userPosts });
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
