define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'text!templates/docs.html'
], function($, _, Backbone, App, docsTemplate) {

  App.Views.Docs = Backbone.View.extend({
    template: docsTemplate,
    render: function() {
      this.$el.html(_.template(this.template));

      return this;
    }
  });

  return App.Views;
});
