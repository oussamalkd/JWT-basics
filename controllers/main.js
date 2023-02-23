require("dotenv")
const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")
const login = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password) {
        throw new CustomAPIError("Email or password not valid", 400)
    }
    const id = new Date().getDate()
    const token = jwt.sign({id,username}, process.env.JWT_SECRET, {expiresIn: "30d"})

    console.log(username, password);
    res.status(200).json({ msg: "user created", token})
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("the token not valid", 401)
    }

    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const random = Math.floor(Math.random()*100)
        res.status(200).json({ msg: `Hello, ${decoded.username}`, secret: `Here is your authorized data, your numbebr is ${random}`})
    } catch (error) {
        throw new CustomAPIError("Unauthorized to access", 401)
    }
    
}

module.exports = { login, dashboard }
