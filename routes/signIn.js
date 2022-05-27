const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('sign/signIn');
});

router.post('/', async (req, res) => {
  const { email, pass } = req.body;
  // console.log(Login);
  if (email && pass) {
    const currentUser = await User.findOne({ where: { email } });
    if (currentUser && await bcrypt.compare(pass, currentUser.pass)) {
      req.session.userid = currentUser.id;
      req.session.username = currentUser.name;
      req.session.useremail = currentUser.email;
      return res.send(200);
    }
    return res.send(401);
  }
  return res.send(401);
});
module.exports = router;
