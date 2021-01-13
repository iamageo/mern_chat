const router = require('express').Router();
const {catchErrors} = require('../handlers/errorHandler')
const chatRoomController = require('../controllers/chatRoomController')
const auth = require('../middlewares/auth')


router.post("/", auth,  catchErrors(chatRoomController.createChatRoom));

router.get("/", auth, catchErrors(chatRoomController.getAllChatrooms));


module.exports = router;