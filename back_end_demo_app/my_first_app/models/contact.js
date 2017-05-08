var mongoose = require('./mongo');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;
var Contact = new Schema({
    contactId: Number,
    fullName: String,
    phoneNo: String,
    email: String,
    createdBy: String,
    createdOn: { type: Date, default: Date.now },
    lastModifiedBy: String,
    lastModifiedOn: { type: Date, default: Date.now },
    state: Number
});

Contact.plugin(autoIncrement.plugin, {model: 'Contact', field: 'contactId', startAt: 1});

module.exports = mongoose.model('Contact', Contact);