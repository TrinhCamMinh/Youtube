require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoute = require('./routes/videoRoute');

//middleware
app.use(express.json());
app.use(cors());

//* routes
app.use('/api/video', videoRoute);

//* connect to database and start server
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connect to database successfully');
            console.log(`listening on port ${process.env.PORT}... `);
        });
    })
    .catch((error) => {
        console.log(error);
    });
