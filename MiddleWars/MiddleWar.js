const checkSession = (req, res, next) => {
  if (req.session.userid) {
    res.locals.user = {
      name: req.session.username,
      id: req.session.userid,
      email: req.session.useremail,
    };
    console.log(res.locals.user);
    return next();
  }
  next();
};
module.exports = { checkSession };
