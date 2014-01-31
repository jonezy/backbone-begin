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
    initialize: function() {
      this.on('route:indexAction', function() {
        var view = new App.Views.Index({el:'#page'});
        view.render();
      });
      this.on('route:docsAction', function() {
        var view = new App.Views.Docs({el:'#page'});
        view.render();
      });
      this.on('route:defaultAction', function(actions) {
        console.log('default action', (actions ? actions : ""));
      });

      Backbone.history.start();
    }
  });

  _.extend(App.Router.prototype, {
    test: function() {

    }

  });

  return App.Router;
});
