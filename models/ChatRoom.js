const mongoose = require('mongoose')


const chatRoom = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
   
});

module.exports = mongoose.model('chatRoom', chatRoom);