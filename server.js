const express= require('express')
const dotenv= require('dotenv')

dotenv.config({path: './config/.env'})

const app=express();

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server started at ${process.env.PORT}` )
})