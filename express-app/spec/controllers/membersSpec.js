const BaseController = require('../../controllers/Base');
const MembersController = require('../../controllers/Members');

describe("Members controller", function () {
  it('should inherit Base controller properties', function () {
    // MembersController is supposed to have all the attributes BaseController has, as it's extended from it
    expect(Object.keys(MembersController)).toEqual(Object.keys(BaseController));
  });
});
