require('babel-register')({
  presets: ['react', 'es2015', 'stage-0']
});

require('babel-polyfill');

global.document = require('jsdom').jsdom(`
  <head>
    <meta charset='UTF-8'>
    <title>We The People</title>
  </head>
  <body>
    <div id='application'></div>
  </body>
`);

global.window = document.defaultView;
global.navigator = window.navigator;
global.__DEV__ = true;
