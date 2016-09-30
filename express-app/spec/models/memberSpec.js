const MemberModel = require('../../models/Member');
const mongoose = require('mongoose');


describe("Member model", function () {
  beforeEach(function () {
    mongoose.connect('mongodb://localhost/tdddb');
  });

  afterEach(function (done) {
    mongoose.connection.db.command({
      dropDatabase: 1
    }, function(err, result){
      if(err) console.log('error: ' + err);
      console.log(result);
      done();
    })
  });

  it('should save a member into database', function (done) {
    var testModel = new MemberModel();
    testModel.name = 'Gaby',
    testModel.birthDate = new Date('2015-10-17');
    testModel.save(function(err){
      expect(err).toBeNull();
      MemberModel.find(function(err, result){
        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Gaby');
        expect(result[0].birthDate).toEqual(new Date('2015-10-17'));
        done();
      });
    });
  });
});
