const _ = require('underscore');

var extend = function(child) {
  return _.extend({}, this, child);
}

module.exports = {
  name: "base",
  extend: extend,
  index: (req, res) => {  },
  edit: (req, res) => {  },
  show: (req, res) => {  },
  new: (req, res) => {  },
  create: (req, res) => {  },
  update: (req, res) => {  },
  destroy: (req, res) => {  }
};
