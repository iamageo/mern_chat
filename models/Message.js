const mongoose = require('mongoose');
const Chatroom = require('./ChatRoom');


const MessageSchema = new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User is required',
        ref: 'User',
        
    }, 
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'ChatRoom is required',
        ref: 'ChatRoom',
    },
    message: {
        type: String,
        required: 'Message is required'
    }
   
});

module.exports = mongoose.model('Message', MessageSchema);