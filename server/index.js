require('dotenv').config({ path: 'config.env' });

import express from 'express';
import path from 'path';

import routes from './routes';

const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '..')));

app.use('/', routes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Express running 🚀 PORT ${server.address().port}`);
});
