Backbone.View.prototype.close = function() {
  this.remove();
  if(this.model) {
    this.stopListening(this.model);
  }
  if(this.collection) {
    this.stopListening(this.collection);
  }
};

