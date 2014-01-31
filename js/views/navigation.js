define([
  'jquery',
  'underscore',
  'backbone',
  'app'
], function($, _, Backbone, App) {

  App.Views.Navigation = Backbone.View.extend({
    el: 'header .container ul li',
    events: {
      'click a':'handleClick'
    },
    handleClick: function(e) {
      var current = $(e.currentTarget);
      $('header ul li').each(function(i) {
        $(this).children().removeClass('selected');
      });
      current.addClass('selected');
    }
  });

  return App;
});
