const express= require('express')
const dotenv= require('dotenv')
const colors = require('colors')
const seekspace = require('./routes/seekspace')
const morgan = require('morgan')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')

dotenv.config({path: './config/.env'})

connectDB();

const app=express();

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/seekspace', seekspace)
app.use(errorHandler)

const server = app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started at ${process.env.PORT}`.underline.bold.cyan )
})

// to handle unhandled rejections
process.on('unhandledRejection',(err, promise) =>{
    console.log(`Error : ${err.message}`.red)
    server.close(() =>process.exit(1))
})