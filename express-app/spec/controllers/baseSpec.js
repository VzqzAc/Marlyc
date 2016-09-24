const BaseController = require('../../controllers/Base');

describe('Base controller', () => {
  it('should have a method extend which returns a child instance', (next) => {
    expect(BaseController.extend).toBeDefined();
    expect(BaseController.run).toBeDefined();
    var child = BaseController.extend({ name: "my child controller" });
    console.log(BaseController);
    console.log(child);
    expect(child.run).toBeDefined();
    expect(child.name).toBeDefined();
    expect(child.name).toBe('my child controller');
    next();
  });

  it('should be able to create different childs', (next) => {
    var childA = BaseController.extend({ name: 'childA', customProperty: 'value' });
    var childB = BaseController.extend({ name: 'childB' });
    expect(childA.name).not.toBe(childB.name);
    expect(childA.run).toBeDefined();
    expect(childB.customProperty).not.toBeDefined();
    next();
  });
});
