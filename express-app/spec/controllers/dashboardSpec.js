const DashboardController = require('../../controllers/Dashboard');
const BaseController = require('../../controllers/Base');

describe("Dashboard controller", () => {
  it('should inherit base controller ', function () {
    // DashboardController is supposed to have all the attributes BaseController has, as it's extended from it
    expect(Object.keys(DashboardController)).toEqual(Object.keys(BaseController));
  });
});
