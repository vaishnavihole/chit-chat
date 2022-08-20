const express = require('express');
const mongoose = require("mongoose")
const messageModel = require('./model/message')
require('dotenv').config();

const PORT = 5000;

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, () =>{
    console.log('Connected to monogoDB')
});



app.get('/health',(req, res)=>{
    res.json({
        success: true
    })
})

app.post('/message',async(req, res)=>{

    // const user: req.body.user;
    // const messageType: req.body.messageType;
    // const messageBody: req.body.messageBody;
    //destructing

    const {user, messageType,messageBody} = req.body 

    const newMessage = new messageModel({
        user: user,
        messageType: messageType,
        messageBody: messageBody
    })

    const savedMessage = await newMessage.save();

    res.json(savedMessage);

})

app.get("/message", async(req, res)=>{
     
    const messages = await messageModel.find()

    res.json(messages);
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
})

