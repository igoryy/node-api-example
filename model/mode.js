const moongose = require('mongoose');
const Schema = moongose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true},
    password: { type: String, required: true, select: false},
    created: { type: Date, default: Date.now }

});


module.exports = moongose.model('user', UserSchema);