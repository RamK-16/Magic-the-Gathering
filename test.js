const {
  Card, User, Post, Cart, State,
} = require('./db/models');

async function findPosts() {
  const Postss = await Post.findAll({
    where: { user_id: 3 },
    include: { model: Card, required: true },
    raw: true,
  });
  console.log(Postss);
}
// findPosts();

async function findPostsInCart() {
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

// findPostsInCart();
