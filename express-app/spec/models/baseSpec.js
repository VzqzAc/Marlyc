var Model = require('../../models/Base'), dbMockup = {};


describe('Models', () => {

    it('should create a new model', () => {
        var model = new Model(dbMockup);
        expect(model.db).toBeDefined();
        expect(model.extend).toBeDefined();
    });


    it('should be extendable', (next) => {
        var model = new Model(dbMockup);
        var OtherTypeOfModel = model.extend({
            myCustomModelMethod: () => { }
        });
        var model2 = new OtherTypeOfModel(dbMockup);
        expect(model2.db).toBeDefined();
        expect(model2.myCustomModelMethod).toBeDefined();
        next();
    });


});
