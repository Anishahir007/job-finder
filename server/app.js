import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './db/connect.js'
import userRouter from './routes/userRouter.js';

dotenv.config();
dbconnect();

const app = express();

// middlewere ---------
app.use(express.json());


app.get("/" , (req,res) =>
    res.send("Hello World")
)


app.use('/auth' , userRouter)





const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`server listening on port ${PORT}`);
});