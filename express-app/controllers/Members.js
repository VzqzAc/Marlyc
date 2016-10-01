const BaseController = require('./Base'),
      View = require('../views/Base');

const MembersModel = new (require('../models/Member'));



var self = this;
module.exports = BaseController.extend({
  name: 'Members',
  index: (req, res) => {
    res.render('../templates/members', {title: 'members', content: 'hola gaby'});
  }
});
