const express = require('express');
const app = express();
const cors = require('cors');
const DB =  require('./models/user');
//for enviroment vars
require('dotenv').config();

//Routes 
const router = require('./routes/user');


//middleware
app.use(express.json());
app.use(cors());
app.use('/', router);


//initiate connect between database and server..server wont connect if database fails
DB.connect(function(err) {
    if(err) {
        console.log(err)
    } else {
        app.listen(process.env.PORT, () => {
    
            console.log(`Listening on ${process.env.PORT}`)
        })
    }
    
});



