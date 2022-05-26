const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('lkpapka/lkLayout');
});

router.get('/addPost', (req, res) => {
  res.render('lkpapka/addPost');
});

module.exports = router;
