const router = require('express').Router();
const {catchErrors} = require('../handlers/errorHandler')
const chatRoomController = require('../controllers/chatRoomController')
const auth = require('../middlewares/auth')

router.get("/", auth, catchErrors(chatRoomController.getAllChatrooms));

router.get("/", auth,  catchErrors(chatRoomController.createChatRoom));



module.exports = router;