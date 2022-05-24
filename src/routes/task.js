const { Router } = require('express')
const { create, getTasks, deleteTask } = require('../controllers/task')

const router = Router()

router.post('/', create)
router.get('/', getTasks)
router.delete('/:id', deleteTask)

module.exports = router