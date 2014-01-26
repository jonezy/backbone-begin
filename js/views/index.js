define([
  'jquery',
  'underscore',
  'backbone',
  'app',
  'text!templates/index_template.html'
], function($, _, Backbone, App, indexTemplate) {

  App.Views.Index = Backbone.View.extend({
    render: function() {
      var output = _.template(indexTemplate, {name:'Chris'});
      this.$el.html(output);

      return this;
    }
  });

  return App.Views;
});
