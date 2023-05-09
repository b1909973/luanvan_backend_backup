const express  = require('express')
const UserController = require('../controller/user.controller')
const router  = express.Router()

router.route('/')
// .get(UserController.find)
.post(UserController.create)

router.route('/:id').get(UserController.findPeopleTheSameFavorites)

router.route('/favorites/:id').post(UserController.addFavorites)

router.route('/friends/:id').get(UserController.findFriendOfFriend)
router.route('/friends/follow/:id').post(UserController.follow)
router.route('/friends/unfollow/:id').post(UserController.unfollow)



// router.route('/about').get(UserController.findAll)

// router.route('/home').get(UserController.findOne)
module.exports = router