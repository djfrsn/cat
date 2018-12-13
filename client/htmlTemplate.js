export default function template(title, preloaded_state = {}, app = '') {
  let scripts = '';

  if (app) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(preloaded_state)}
                </script>
                <script src="dist/client.js"></script>
                `;
  } else {
    scripts = ` <script src="dist/server.js"> </script> `;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="app">
                   <div id="app">
                      <!--- magic happens here -->  ${app}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}
