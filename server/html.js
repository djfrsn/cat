export default function template(title, preloaded_state = {}, app = '') {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
                <link rel="stylesheet" href="styles.css">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
              </head>
              <body>
                  <div id="app">${app}</div>
                  <script>
                    window.__STATE__ = ${JSON.stringify(preloaded_state)}
                  </script>
                  <script src="bundle.js"> </script>
              </body>
              </html>
              `;

  return page;
}
