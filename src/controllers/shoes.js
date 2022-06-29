const shoes = require('../../shoes.json')

const getShoes = async (req, res) => {
res.status(200).json(shoes)
}

module.exports = {
    getShoes,
};