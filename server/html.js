export default function template(title, preloaded_state = {}, app = '') {
  const CDN_URL =
    process.env.NODE_ENV === 'production' ? process.env.CDN_URL : '';

  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css">
                <link rel="stylesheet" href="${CDN_URL}/styles.css">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
              </head>
              <body>
                  <main id="app">${app}</main>
                  <script>
                    window.__STATE__ = ${JSON.stringify(preloaded_state)}
                  </script>
                   <script src="${CDN_URL}/bundle.js"> </script>
              </body>
              </html>
              `;

  return page;
}
