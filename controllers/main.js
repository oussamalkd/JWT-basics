const login = async (req, res) => {
    res.send("Fake Login/Register/Signup Route")
}

const dashboard = async (req, res) => {
    const random = Math.floor(Math.random()*100)
    res.status(200).json({ msg: `Hello, somebody`, secret: `Here is your authorized data, your numbebr is ${random}`})
}

module.exports = { login, dashboard }
