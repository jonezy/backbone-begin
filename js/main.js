require.config({
  paths:{
    jquery: 'libs/jquery-2.1.0.min',
    underscore: 'libs/underscore-min',
    backbone: 'libs/backbone-min',
    templates: '../templates'
  },
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

require([
  'app',
  // load your router, models, collections and views here and they will
  // all be attatched to the App varible and available throughout your 
  // app without having to load again.
  'router',
  'views/index'
], function(App, Router) {
  var appRouter = new App.Router;
});

