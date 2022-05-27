const router = require('express').Router();
const sequelize = require('sequelize');
const {
  Card, User, Post, City, State, Cart,
} = require('../db/models');

router.get('/', async (req, res) => {
  const card = await Card.findAll({
    include: {
      model: Post,
    },
  });
  res.render('index', { card });
});
router.get('/card/:id', async (req, res) => {
  const postThisCard = await Post.findAll({
    where: { card_id: Number(req.params.id) },
    include: [{
      model: User,
      include: {
        model: City,
      },
    }, {
      model: State,
    }],
  });
  console.log(JSON.parse(JSON.stringify(postThisCard))[0]);
  const card = await Card.findByPk(Number(req.params.id));
  res.render('posts', { card, postThisCard });
});
// router.post('/', (req, res) => {
//   res.render('index');
// });
router.post('/card/:idPost/addToCart', async (req, res) => {
  const userId = 2;
  await Cart.create({
    user_id: userId,
    post_id: req.params.idPost,
  });
});

module.exports = router;
