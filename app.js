require("dotenv")
require("express-async-errors")

const express = require("express")
const app = express()

const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//router
const mainRoutes = require("./routes/main")
//middleware
    //front-end folder
//app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1", mainRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const startServer = async () => {
    try {
        app.listen(port, console.log(`App is runing on http://localhost:${port}`))
    } catch (error) {
        console.log(error);
    }
}

startServer()
