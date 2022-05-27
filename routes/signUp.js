const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, City } = require('../db/models');

router.get('/', (req, res) => {
  res.render('sign/signUp');
});

router.post('/', async (req, res) => {
  const { name, email, city_id, pass } = req.body;
  const usersCity = await City.findOne({ where: { name: city_id } });
  let usersCityId = false;
  if (usersCity) {
    usersCityId = usersCity.id;
  }
  console.log(name, email, city_id, pass, usersCity, usersCityId);
  if (name && email && pass && usersCityId) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.send(401);
      // eslint-disable-next-line no-else-return
    } else {
      const user1 = await User.create({
        ...req.body,
        pass: await bcrypt.hash(pass, 10),
        role_id: 2,
        city_id: usersCityId,
      });
      req.session.userid = user1.id;
      req.session.username = user1.name;
      req.session.useremail = user1.email;
      req.session.userrole = user1.role_id;
      return res.send(200);
    }
  }

  return res.send(401);
});

module.exports = router;
