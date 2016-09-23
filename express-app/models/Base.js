/*
* Here will be the basic model, this should be extendable and have the
* availability to communicate with the db object
*/

module.exports = function(db) {
  this.db = db;
};

module.exports.prototype = {
  extend: (properties) => {
    var Child = module.exports;
    Child.prototype = module.exports.prototype;
    // I don't understand this very well
    // As I see, what this loop does is to add each property to the Child obj as a self property, which will be available because of module.exports
    for (var key in properties) {
       Child.prototype[key] = properties[key];
    }
    return Child;
  },
  setDB: (db) => {
    this.db = db;
  },
  collection: () => {
    if(this._collection) return this._collection;
    return this._collection = this.db.collection(''); // Need to check what to put here
  }
};
