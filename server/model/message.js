const mongoose = require('mongoose');

// drived form a schema

const messageSchema = new mongoose.Schema({
    user: String,
    messageType: String,
    messageBody: String,
    createdAt: {type:Date,default: Date.now}
})

const messageModel = mongoose.model('messages', messageSchema)

module.exports = messageModel