// This is the applications main entry point.  Do anything that 
// needs to be done once here!

// load the config externally for extensibility
require(['config'], function() {
  require([
    'jquery',
    'app',
    // load your router, models, collections and views here and they will
    // all be attatched to the App varible and available throughout your 
    // app without having to load again.
    'router',
    'views/index'
  ], function($, App, Router) {
    $(function() {
      var appRouter = new App.Router();
    });
  });
});
