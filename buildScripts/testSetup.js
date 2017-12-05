//This file isn't transpilled, so must use CommonJS and ES5

// REgister babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't undersstand.
require.extensions['.css'] = function() {};
