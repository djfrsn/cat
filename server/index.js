require('now-env');

import mongoose from 'mongoose';
import path from 'path';
import express from 'express';
import passport from 'passport';
import AnonymousStrategy from 'passport-anonymous';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import {
  developmentErrors,
  productionErrors
} from './views/helpers/errorHandlers';

import './models/User';
import './models/Favorite';

import routes from './routes';

import { login } from './controllers/authController';

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true
  }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises, needed for async/await support
mongoose.connection.on('error', err => {
  console.error(`😶 🚫 😶 🚫 😶 🚫 😶 🚫 → ${err.message}`);
});

const app = express();

app.use(passport.initialize());
passport.use(new AnonymousStrategy());

// Static files
app.use(express.static(path.resolve(__dirname, '..')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // extended allows for nesting of data

app.use(cookieParser(process.env.SECRET));

app.use('/', routes);

// Add login route
login(app);

if (app.get('env') === 'development') {
  app.use(developmentErrors);
}

app.use(productionErrors);

const server = app.listen(process.env.PORT, () => {
  console.log(`Express running 🚀 PORT ${server.address().port}`);
});
