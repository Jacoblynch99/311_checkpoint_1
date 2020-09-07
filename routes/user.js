const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()


router.get('/', controller.allUsers)

router.get('/:id', controller.oneUser)

router.post('/', controller.createUser)

router.put('/:id', controller.updateUser)

router.delete('/:id', controller.deleteUser)

module.exports = router