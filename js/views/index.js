define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'text!templates/index_template.html'
], function($, _, Backbone, App, indexTemplate) {

  App.Views.Index = Backbone.View.extend({
    template: indexTemplate,
    render: function() {
      this.$el.html(_.template(this.template));

      return this;
    }
  });

  return App.Views;
});
