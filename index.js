const express=require('express');
const mongoose=require('mongoose');
const cors =  require('cors');
require('dotenv').config();

const enquiryRouter=require('./App/routes/web/enquiryRoutes.js');
const app=express();
app.use(express.json());
app.use(cors());
app.use('/web/mern/enquiry', enquiryRouter);

//Connection
mongoose.connect(process.env.DBURL).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})