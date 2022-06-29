const { Router } = require('express')
const { getShoes } = require('../controllers/shoes')

const router = Router()

router.get('/', getShoes)

module.exports = router