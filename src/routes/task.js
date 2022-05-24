const { Router } = require('express')
const { create, getTasks, deleteTask, updateTask } = require('../controllers/task')

const router = Router()

router.post('/', create)
router.get('/', getTasks)
router.delete('/:id', deleteTask)
router.patch('/:id', updateTask)

module.exports = router