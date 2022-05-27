const router = require('express').Router();
const { Card, User, Post, } = require('../db/models');

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
})
// router.post('/', (req, res) => {
//   res.render('index');
// });

module.exports = router;
