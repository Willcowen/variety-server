const prisma = require('../utils/prisma');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const email = jwt.decode(token);
  const { name, description, status } = req.body;

  const createdTask = await prisma.task.create({
    data: {
      name: name,
      description: description,
      status: status,
      user: {
        connect: {
          email: email,
        },
      },
    },
  });

  res.json({ createdTask });
};

const getTasks = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const email = jwt.decode(token);
  const foundUser = await prisma.user.findUnique({
    where: { email: email },
  });

  const tasks = await prisma.task.findMany({
    where: { userId: foundUser.id },
    orderBy: [
      {
        status: 'desc',
      },
      {
        index: 'asc',
      },
    ],
  });

  return res.json({ tasks });
};

const deleteTask = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const email = jwt.decode(token);

  const foundUser = await prisma.user.findUnique({
    where: { email: email },
  });

  const tasks = await prisma.task.findMany({
    where: {
      userId: foundUser.id,
    },
  });

  const taskToDelete = tasks.filter(
    (task) => task.id === Number(req.params.id)
  );

  const deleteTask = await prisma.task.delete({
    where: {
      id: taskToDelete[0].id,
    },
  });


  res.status(201).json({ taskToDelete });
};

const updateTask = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const email = jwt.decode(token);
  const { name, description } = req.body

  const foundUser = await prisma.user.findUnique({
    where: { email: email },
  });

  const tasks = await prisma.task.findMany({
    where: {
      userId: foundUser.id,
    },
  });

  const taskToUpdate = tasks.filter(
    (task) => task.id === Number(req.params.id)
  );
  
  const updatedTask = await prisma.task.update({
    where: { 
      id: taskToUpdate[0].id,
    },
    data: {
      name: name,
      description: description
    }
  });
  res.json(updatedTask);
};



module.exports = {
  create,
  getTasks,
  deleteTask,
  updateTask
};
