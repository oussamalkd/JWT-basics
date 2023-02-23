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
    console.log(req.user)
    const random = Math.floor(Math.random()*100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `Here is your authorized data, your numbebr is ${random}`}) 
}

module.exports = { login, dashboard }
