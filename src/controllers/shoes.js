const shoes = require('../../shoes.json')
const prisma = require('../utils/prisma')

const getShoes = async (req, res) => {
// res.status(200).json(shoes)

const shoesList = await prisma.shoe.findMany({})
console.log('shoesList:', shoesList)

res.status(200).json({shoes: shoesList})
};

module.exports = {
    getShoes,
};