const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const myReact = new Schema({
    username: String,
    password: String,
    date: { type: Date, default: Date.now }
});

const MyModel = mongoose.model('user', myReact);

module.exports = MyModel;
