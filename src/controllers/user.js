const prisma = require("../utils/prisma");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecret = 'somesecurestring'

const create = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    console.log("name:", firstName, lastName, "email:", email);
  
    const createdUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        },
    });
  
    res.json({ createdUser });
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if (!foundUser) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordsMatch) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const token = jwt.sign(email , jwtSecret)

    return res.status(200).json({ data: token });
};

module.exports = {
    create,
    login
};