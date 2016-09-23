module.exports = function(response, template) {
  this.response = response;
  this.template = template;
};

module.exports.prototype = {
  extend: (properties) => {
    var Child = module.exports;
    // As I see, what this loop does is to add each property to the Child obj as a self property, which will be available because of module.exports
    for (var key in properties) {
      Child.prototype[key] = properties[key];
    }
    return Child;
  },
  render: (data) => {
    // It's supposed to render the current template and pass the current data if exists
    if(this.response && this.template) {
      this.response.render(this.template, data);
    }
  }
};
