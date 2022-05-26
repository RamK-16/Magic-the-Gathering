const router = require('express').Router();
const { Cart } = require('../db/models');

async function findPostsInUserCart() {
  try {
    const Postss = await Post.findAll({
      // where: { user_id: 1 },
      attributes: ['card_id'],
      include: [{ model: User, as: 'UserInCart', attributes: ['name'] }, { model: Card, attributes: ['name'] }, { model: State, attributes: ['name'] }],
      // raw: true,
    });

    // console.log(Postss)
    console.log(JSON.parse(JSON.stringify(Postss))[0]);
  } catch (err) {
    console.log('--------------------->', err);
  }
}

router.get('/', async (req, res) => {
  const cartPosts = await Cart.findAll(

  );
  res.render(`cart/cart/${id}`, { cartPosts });
});

router.get('/success', (req, res) => {
  res.render('cart/cartSuccess');
});
module.exports = router;
