const mongoose = require('mongoose');

const schoolSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    state: String,
    admissionScore: Number,
    status: String,
    degreeOffered: String,
    applicationFee: Number,
    country: String,
    courseOffered: String,
    schoolCost: Number
});

module.exports = mongoose.model('School', schoolSchema);