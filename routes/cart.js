const router = require('express').Router();
const {
  Cart, User, Post, Card, State, City,
} = require('../db/models');

async function findPostsInUserCart() {
  const PostsInUserCart1 = await User.findOne({
    where: {
      id: 2,
    },
    include: [{
      model: Post,
      as: 'PostInCart',
      include: [{
        model: Card,
      }, {
        model: State,
      }, {
        model: User,
        include: City,
      }],
    }],
  });
  // console.log('------>\n', JSON.parse(JSON.stringify(PostsInUserCart1)));
  return JSON.parse(JSON.stringify(PostsInUserCart1));
}

router.get('/', async (req, res) => {
  const PostInUserCart1 = await findPostsInUserCart();
  const PostInUserCart = PostInUserCart1.PostInCart;
  // console.log(PostInUserCart);
  let sumPrice = 0;
  PostInUserCart.forEach((post) => {
    // console.log(post.price);
    sumPrice += post.price;
  });
  // console.log('------>\n', PostInUserCart);
  res.render('cart/cart', { PostInUserCart, sumPrice });
});

router.get('/success', (req, res) => {
  res.render('cart/cartSuccess');
});

router.delete('/delete/:id', async (req, res) => {
  const userId = 2;
  const postInCart = await Cart.findOne({ where: { post_id: req.params.id, user_id: userId } });
  // console.log(postInCart);
  await postInCart.destroy();
  // res.sendStatus(200);
});

module.exports = router;
