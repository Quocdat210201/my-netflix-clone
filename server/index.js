const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Connection URL and database name
const url = 'mongodb://localhost:27017';
// const dbName = 'myNetflixMovies';

// Use connect method to connect to the server
async function connect(){
    try {
        await mongoose.connect(url);
        console.log("Connect to MongoDB successful");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(8000 ,()=>{
    console.log("Server start on port 8000");
})


