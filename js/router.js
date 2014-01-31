define([
  'jquery',
  'underscore',
  'backbone',
  'app'
], function($, _, Backbone, App, IndexView) {

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'indexAction',
      'docs': 'docsAction',
      '*actions':'defaultAction'
    },
    initialize: function(options) {
      var that = this;
      this.viewManager = options.viewManager;

      this.on('route', function() {
        console.log('you can do things everytime a route is run');
      });

      this.on('route:indexAction', function() {
        var view = new App.Views.Index();
        that.viewManager.showView(view); 
      });

      this.on('route:docsAction', function() {
        var view = new App.Views.Docs();
        that.viewManager.showView(view);
      });

      this.on('route:defaultAction', function(actions) {
        console.log('default action', (actions ? actions : ""));
      });

      Backbone.history.start();
    }
  });

  return App;
});
