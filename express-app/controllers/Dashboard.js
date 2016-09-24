const BaseController = require("./Base"),
    View = require('../views/Base');
module.exports = BaseController.extend({
  name: 'Dashboard',
  run: (req, res, next) => {
    var v = new View(res, 'dashboard');
    v.render({
      title: 'Dashboard',
      content: 'This is the dashboard'
    })
  }
});
