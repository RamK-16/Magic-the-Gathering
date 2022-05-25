const { Card, User, Post, Cart } = require('./db/models');

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
  const Postss = await Post.findAll({
    // where: { user_id: 1 },


    attributes: ['UserInCart.name'],
    include: { model: User, as: 'UserInCart' },
    
    raw: true,
  });

  return Postss;
}
