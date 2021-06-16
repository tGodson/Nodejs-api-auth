const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('connected to db')
);

//import routes
const authRoute = require('./routes/auth');

//import middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server is up and running'));