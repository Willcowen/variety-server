const prisma = require('../utils/prisma')

const getShoes = async (req, res) => {

const dressList = await prisma.dress.findMany({})
console.log('dressList:', dressList)

res.status(200).json({dresses: dressList})
};

module.exports = {
    getShoes,
};