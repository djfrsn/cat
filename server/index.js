require('dotenv').config({ path: 'config.env' });

import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import AnonymousStrategy from 'passport-anonymous';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const MongoStore = require('connect-mongo')(session);
import {
  developmentErrors,
  productionErrors
} from './views/helpers/errorHandlers';

import './models/User';
import './models/Favorite';

import routes from './routes';

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises, needed for async/await support
mongoose.connection.on('error', err => {
  console.error(`😶🚫 😶 🚫 😶 🚫 😶 🚫 → ${err.message}`);
});

const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // extended allows for nesting of data

app.use(cookieParser());

passport.use(new AnonymousStrategy());
app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    cookie: {
      maxAge: 604800000 // 7 days
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

if (app.get('env') === 'development') {
  app.use(developmentErrors);
}

app.use(productionErrors);

const server = app.listen(process.env.PORT, () => {
  console.log(`Express running 🚀 PORT ${server.address().port}`);
});
