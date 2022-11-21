require('dotenv').config()
const express = require('express')
const app = express()
const userRoute = require('./route/userRoute');
const videoRoute = require('./route/videoRoute');
const commentRoute = require('./route/commentRoute');

//middlewares
app.use(express.json());

//routes
app.use('/api/user', userRoute); //user routes
app.use('/api/video', videoRoute); //video routes
app.use('/api/comment', commentRoute); //comment routes

app.listen(process.env.PORT || 5000, () => {
    console.log(`listenning on port ${process.env.PORT}... `);
})

