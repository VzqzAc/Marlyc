const _ = require('underscore');

var extend = function(child) {
  return _.extend({}, this, child);
}

module.exports = {
  name: "base",
  extend: extend,
  run: function(req, res, next) {

  }
};
