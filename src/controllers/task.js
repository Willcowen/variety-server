const prisma = require('../utils/prisma');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {
  console.log('req.headers:', req.headers.authorization);
  console.log('token:', req.headers.authorization.split(' ')[1]);
  const token = req.headers.authorization.split(' ')[1];
  console.log('decoded token:', jwt.decode(token));
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

  res.json({ createdTask })
};

const getTasks = async (req, res) => {
  console.log('token:', req.headers.authorization.split(' ')[1]);
  const token = req.headers.authorization.split(' ')[1];
  const email = jwt.decode(token)
  const foundUser = await prisma.user.findUnique({
      where: { email: email }
  });

  const tasks = await prisma.task.findMany({
      where: {userId: foundUser.id}
  });

  return res.json({ tasks });
};

module.exports = {
  create,
  getTasks,
};
