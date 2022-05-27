const router = require('express').Router();

const { Post, Card, State, User } = require('../db/models');

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
  const user1 = await User.findByPk(2);
  const userPosts = JSON.parse(JSON.stringify(userPosts1));
  const user = JSON.parse(JSON.stringify(user1));
  console.log(user);
  res.render('lkpapka/lkLayout', { userPosts, user });
});

router.post('/', async (req, res) => {
  try {
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
    res.json({ userPosts });
  } catch (err) {
    console.log('error in router', err);
  }
});

router.post('/addPost', async (req, res) => {
  const card = await Card.findOne({ where: { name: req.body.cardName } });
  console.log(card);
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
