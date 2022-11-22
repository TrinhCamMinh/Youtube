require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const videoRoute = require('./routes/videoRoute');

//middleware
app.use(express.json());
app.use(cors());

//* routes
app.use('/api/video', videoRoute);

//* connect to database and start server
app.listen(process.env.PORT || 5000, () => {
    console.log('connect to database successfully');
    console.log(`listening on port ${process.env.PORT}... `);
});
