// This is the applications main entry point.  Do anything that 
// needs to be done once here!

// load the config externally for extensibility
require(['config'], function() {
  require([
    'jquery',
    'app',
    // load your router, models, collections and views here and they will
    // all be attatched to the App varible and available throughout your 
    // app without having to load again. Of course this is optional, you 
    // can still load models and views etc in each individual file if
    // you prefer to do so.
    'views/index',
    'views/docs',
    'views/navigation',
    'viewmanager',
    'router'
  ], function($, App) {
    $(function() {
      var appRouter = new App.Router({viewManager:App.ViewManager});
      var navigation = new App.Views.Navigation();
    });
  });
});
