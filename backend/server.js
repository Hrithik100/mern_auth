import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
dotenv.config()
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import userRoutes from "./routes/userRoutes.js"
import connectDB from "./config/db.js"


const port = process.env.PORT || 5000


connectDB()

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());

app.use(cookieParser())

app.use('/api/users', userRoutes)


app.get('/', (req,res)=> {
    res.send('Server is ready')
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})