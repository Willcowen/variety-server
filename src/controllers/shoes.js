const prisma = require('../utils/prisma')

const getShoes = async (req, res) => {

const shoesList = await prisma.shoe.findMany({})
console.log('shoesList:', shoesList)

res.status(200).json({shoes: shoesList})
};

module.exports = {
    getShoes,
};