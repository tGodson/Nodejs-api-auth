const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//import routes
const authRoute = require('./routes/auth');

dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('connected to db')
);

//middlewares
app.use(express.json());

//import middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => console.log('server is up and running'));