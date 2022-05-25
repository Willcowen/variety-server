const prisma = require('../utils/prisma');
const jwt = require('jsonwebtoken');

const updateTasks = async (req, res) => {
  const tasks = req.body
  console.log('tasks from req body:', tasks)
  const updatedTasks = tasks.forEach(async function(task){
        await prisma.task.update({
          where: {
              id: Number(task.id),
          },
          data: {
              status: task.status,
              index: task.index
          }
      });
  })
  res.json('Tasks updated')
};

module.exports = {
  updateTasks,
};
