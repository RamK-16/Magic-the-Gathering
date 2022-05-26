const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('lkpapka/lkLayout');
});

module.exports = router;
