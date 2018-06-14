const mongoose = require('mongoose');
const Operations = require('./models/operations.model');

const connect = (path) => mongoose.connect(path);

module.exports = {
    connect,
    Operations
}