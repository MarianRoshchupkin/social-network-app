export const indexTemplate = (content, user) =>
`
  <!DOCTYPE html>
  <html lang="ru">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Network</title>
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__user__ = JSON.parse('${user}');
    </script>
  </head>
  
  <body>
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
  </body>
  
  </html>
`;
