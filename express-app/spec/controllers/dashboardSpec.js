const DashboardController = require('../../controllers/Dashboard');
const BaseController = require('../../controllers/Base');

var callCount = 0;

describe("Dashboard controller", () => {
  it('should inherits base controller ', function () {
    // This might not be the best way to check inheritance
    spyOn(BaseController, 'run').and.callFake(() => {
      if(this == DashboardController) callCount++;
      //BaseController.run().apply(this, 'dunno');
      console.log(this);
    });
    DashboardController.run('req', 'res', 'next');
    console.log(DashboardController);
    expect(callCount).toBe(1);

    var d = new DashboardController();
    d.run();
    expect(callCount).toBe(1);
  });
});
