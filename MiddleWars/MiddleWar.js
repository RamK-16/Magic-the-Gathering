const checkSession = (req, res, next) => {
//   if (req.session.userid) {
//     res.locals.user = {
//       login: req.session.userlogin,
//       id: req.session.userid,
//       email: req.session.useremail,
//     };
//     // console.log(res.locals.user);
//     return next();
//   }
//   next();
};
module.exports = { checkSession };
