const { Router } = require('express')
const { getDresses } = require('../controllers/dresses')

const router = Router()

router.get('/', getShoes)

module.exports = router