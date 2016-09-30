const BaseController = require('./Base'),
      View = require('../views/Base');

const MembersModel = new (require('../models/Member'));

var self = this;
module.exports = BaseController.extend({
  name: 'Members',
  run: (req, res, next) => {
    
  }
});
