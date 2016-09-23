const View = require('../../views/Base');

describe("Base view", () => {

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it("create and render new view", function(next) {
		var responseMockup = {
      //loggg: console.log('tf'),
			render: (template, data) => {
				expect(data.myProperty).toBeDefined();
        console.log(data);
				expect(data.myProperty).toBe('value');
				expect(template).toBe('template-file');
				next();
			}
		};
		var v = new View(responseMockup, 'template-file');
		v.render({myProperty: 'value'});
	});
	it("should be extendable", function(next) {
		var v = new View();
		var OtherView = v.extend({
			render: function(data) {
				expect(data.prop).toBeDefined();
				expect(data.prop).toBe('yes');
				next();
			}
		});
		var otherViewInstance = new OtherView();
		expect(otherViewInstance.render).toBeDefined();
		otherViewInstance.render({prop: 'yes'});
	}, 10000);

  afterEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

});
