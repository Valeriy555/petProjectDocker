const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: {type: String, required: true, default: ''},
    age: {type: Number, default: 18},
    email: {type: String, required: true, trim: true, lowercase: true, unique: true},
}, {
    timestamps: true
});

module.exports = model('User', userSchema);
