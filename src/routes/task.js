const { Router } = require('express')
const { create, getTasks } = require('../controllers/task')

const router = Router()

router.post('/', create)
router.get('/', getTasks)

module.exports = router