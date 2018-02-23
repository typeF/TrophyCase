const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
  function (email, password, cb) {
    if (email !== 'a@a.com') {
      return cb(null, false, { message: 'Invalid credentials' })
    }
    return cb(null, {user: 'testUser'}, { message: 'Logged in successfully' });
  }
))

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'mysecret'
  },
  function (jwtPayload, done) {
    console.log('jwtPayload is: ', jwtPayload);
    return done(null, {user: 'testUser2'});
  })
);