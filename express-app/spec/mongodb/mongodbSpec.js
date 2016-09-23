
describe('MongoDB', () => {

    it('is there a MongoDB server running', (next) => {
        var MongoClient = require('mongoose');
        MongoClient.connect('mongodb://localhost/marlyc', (err, db) => {
            expect(err).toBe(undefined);
            next();
        });
    });

});
