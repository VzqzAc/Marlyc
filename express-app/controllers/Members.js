const BaseController = require('./Base');

module.exports = BaseController.extend({
  name: 'Members',
  run: (req, res, next) => {
    var v = new View(res, 'members');
    v.render({
      title: 'Members',
      content: 'Members view'
    });
  }
});
