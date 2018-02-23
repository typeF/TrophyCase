require('dotenv').config();
require('./strategyConfig');
const express = require('express');
const app = express();
const passport = require('passport');
const port = process.env.PORT || 3000;
const routes = require('./routes');
const FacebookStrategy = require('passport-facebook').Strategy;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const initOptions = {};
const pgp = require('pg-promise')(initOptions);

const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD
}

const db = pgp(cn);

async function tester() {
  const result = await db.any('SELECT * FROM USERS WHERE active = $1', [true]);
  console.log(result);
}

tester();

// try {
//   const users = await db.any('SELECT * FROM USERS WHERE active = $1', [true]);
// } catch (err) {
//   console.log(err);
// }

const auth = require('./auth');
const test = require('./test');


// const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
// const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

app.use('/auth', auth);

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) res.status(401).json({ status: 'error', code: 'unathorized' });
    const token = jwt.sign(user, 'mysecret');
    return res.json({ user, token });
  })
  (req, res, next);
});

app.use('/secret', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send('you made it!')
});

app.get('/success', (req, res) => {
  res.send('Successfully logged in');
})

app.get('/error', (req, res) => {
  res.send('Error logging in ');
});

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: '/auth/facebook/callback'
//   },
//   (accessToken, refreshToken, profile, cb) => {
//     return cb(null, profile);
//   }
// ));

// app.get('/auth/facebook',
//   passport.authenticate('facebook')
// );

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/error' }),
//   (req, res) => {
//     res.redirect('/success');
//   }
// );

app.get('/', (req, res) => {
  res.send(200)});

app.use(routes()); 

app.listen(port, () => console.log('Server listening on port ' + port));
