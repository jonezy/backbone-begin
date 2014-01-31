define([
  'jquery',
  'underscore',
  'backbone',
  'app'
], function($, _, Backbone, App) {
  function ViewManager() { }

  Backbone.View.prototype.close = function() {
    this.remove();
  };

  ViewManager.prototype.showView = function(view) {
      if(this.currentView) {
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();
      console.log(this.currentView.el);

      $('#page').html(this.currentView.el);
  };


  App.ViewManager = new ViewManager();

  return App;
});
