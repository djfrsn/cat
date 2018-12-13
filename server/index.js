import express from 'express';
import path from 'path';

import routes from './routes';

const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '..')));

app.use('/', routes);

const server = app.listen('3088', () => {
  console.log(`Express running 🚀 PORT ${server.address().port}`);
});
