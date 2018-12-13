export default function template(title, preloaded_state = {}, app = '') {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
              </head>
              <body>
                <div class="app">
                   <div id="app">
                      ${app}
                   </div>
                </div>
                  <script>
                    window.__STATE__ = ${JSON.stringify(preloaded_state)}
                  </script>
                  <script src="bundle.js"> </script>
              </body>
              </html>
              `;

  return page;
}
