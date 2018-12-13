import express from 'express';
import path from 'path';

// views/server are read from dist/dir
import renderApp from './views/server';
import html from './html';

const app = express();

// Static files
app.use(express.static(path.resolve(__dirname, '..')));

const initial_state = { name: 'Dennis' };

app.get('/', (req, res) => {
  const { preloaded_state, app } = renderApp(initial_state);

  const response = html('Cat', preloaded_state, app);

  res.setHeader('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(response);
});

const server = app.listen('3000', () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
