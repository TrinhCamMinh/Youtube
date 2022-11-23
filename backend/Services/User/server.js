require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');

//middleware
app.use(express.json());
app.use(cors());

//* routes
app.use('/api/user', userRoute);

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
