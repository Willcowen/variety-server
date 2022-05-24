const { Router } = require('express')
const { create, login } = require('../controllers/user')

const router = Router()

router.post('/', create)
router.post('/login', login)

module.exports = router