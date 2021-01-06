const mongoose = require('mongoose')
const ChatRoom = mongoose.model('chatRoom')

exports.createChatRoom = async(req, res) => {
    const {name} = req.body

    //verificar se  chat já existe
    const nameRegex= /^[A-Za-z\s]+$/;
    
    if(!nameRegex.test(name)) throw "Chatroom name can contain only alphbets"

    const chatRoomExists = await ChatRoom.findOne({name});

    if(chatRoomExists) throw "chatroom with that name already exist"

    const chatroom = new ChatRoom({
        name,
    });

    await chatroom.save()

    res.json({
        message: "ChatRoom create"
    })
};

exports.getAllChatrooms = async (req, res) => {
    const chatrooms = await ChatRoom.find({});
  
    res.json(chatrooms);
  };