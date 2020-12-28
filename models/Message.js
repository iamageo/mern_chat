const mongoose = require('mongoose');
const Chatroom = require('./ChatRoom');


const MessageSchema = new mongoose.Schema({
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'ChatRoom is required',
        ref: 'ChatRoom',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User is required',
        ref: 'User',

    }, 
    message: {
        type: String,
        required: 'Message is required'
    }
   
});

module.exports = mongoose.model('MessageSchema', MessageSchema);