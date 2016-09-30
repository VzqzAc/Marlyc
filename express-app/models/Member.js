const Model = require('./Base'),
      crypto = require('crypto'),
      mongoose = require('mongoose');
      model = new Model();
      var Schema = mongoose.Schema;

var memberSchema = new Schema({
  name: String,
  address: String,
  phone: Number,
  credentialTypeID: String,
  credentialNumber: Number,
  requestNumber: Number,
  inscriptionDate: { type: Date, default: Date.now },
  birthDate: Date,
  birthPlace: String,
  ocupation: String,
  observations: String,
  _activity: {
    _id: {
      type: Schema.ObjectId,
      ref: 'Activity'
    }
  },
  suspended: Boolean
});

module.exports = mongoose.model('Member', memberSchema);

// var MembersModel = model.extend({
//   insert: (data, callback) => {
//     //data.ID = crypto.randomBytes(20).toString('hex');
//     this.collection('members').insert(data, {}, callback || () => {});
//   },
//   update: (data, callback) => {
//     this.collection('members').update({ID: data.ID}, data, {}, callback || () => {});
//   },
//   getMembers: (data, callback) => {
//     this.collection('members').find(query || {}).toArray(callback);
//   },
//   remove: (data, callback) => {
//     this.collection('members').findAndModify({ID: ID}, [], {}, {remove: true}, callback);
//   }
// });
