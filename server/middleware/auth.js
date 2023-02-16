//Authentication middleware here with passport

const passportJWT = require("passport-jwt");
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
// passport strategy to validate token
const jwtOptions = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

passport.use(
  new passportJWT.Strategy(jwtOptions, (jwtPayload, done) => {
    //console.log(jwtPayload.email);
    User.findOne({ email: jwtPayload.email }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);
