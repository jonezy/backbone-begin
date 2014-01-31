define([
  'jquery',
  'underscore',
  'backbone',
  'app'
], function($, _, Backbone, App) {
  function ViewManager() { }

  ViewManager.prototype.showView = function(view) {
      if(this.currentView) {
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();

      $('#page').html(this.currentView.el);
  };

  App.ViewManager = new ViewManager();

  return App;
});
