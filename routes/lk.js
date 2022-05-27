const router = require('express').Router();

const { Post, Card, State, User } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.userid) {
    const userPosts1 = await Post.findAll({
      where: {
        user_id: req.session.userid,
      },
      attributes: ['price', 'id'],
      include: [{
        model: Card,
        attributes: ['img', 'name'],
      }, {
        model: State,
        attributes: ['name'],
      }],
    });
    const user1 = await User.findByPk(req.session.userid);
    const userPosts = JSON.parse(JSON.stringify(userPosts1));
    const user = JSON.parse(JSON.stringify(user1));
    // console.log(user);
    res.render('lkpapka/lkLayout', { userPosts, user });
  }
});

router.post('/', async (req, res) => {
  try {
    const userPosts1 = await Post.findAll({
      where: {
        user_id: req.session.userid,
      },
      attributes: ['price', 'id'],
      include: [{
        model: Card,
        attributes: ['img', 'name'],
      }, {
        model: State,
        attributes: ['name'],
      }],
    });
    const userPosts = JSON.parse(JSON.stringify(userPosts1));
    // console.log(userPosts);
    res.json({ userPosts });
  } catch (err) {
    console.log('error in router', err);
  }
});

router.post('/addPost', async (req, res) => {
  const card = await Card.findOne({ where: { name: req.body.cardName } });
  const cardId = card.id;
  console.log(cardId);
  const newPost = await Post.create({
    card_id: cardId,
    user_id: req.session.userid,
    price: req.body.price,
    state_id: req.body.state_id,
  });
  return res.send(200);
});
module.exports = router;

router.delete('/:id', async (req, res) => {
  try {
    console.log(req.params);
    await Post.destroy({ where: { id: req.params.id } });
    // return res.status(200);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(401);
  }
});
