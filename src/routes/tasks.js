const { Router } = require('express')
const { updateTasks } = require('../controllers/tasks')

const router = Router()

router.patch('/', updateTasks)

module.exports = router