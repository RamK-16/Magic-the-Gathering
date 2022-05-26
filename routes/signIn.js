const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('sign/signIn');
});

module.exports = router;
