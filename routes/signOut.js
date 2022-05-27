const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy();
  res.clearCookie('sID').redirect('/');
});
module.exports = router;
