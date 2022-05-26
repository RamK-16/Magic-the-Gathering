const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('sign/signUp');
});

module.exports = router;
