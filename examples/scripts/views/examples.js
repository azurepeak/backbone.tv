define([
  'app'
],

function(app) {

  "use strict";

  var Examples = Backbone.TV.View.extend({
    className: 'examples',

    R: {
      template: { uri: 'template://examples.html' }
    },

    render: function() {
      this.$el.append(R.get(this.R.template)());
    }
  });

  return Examples;

});
