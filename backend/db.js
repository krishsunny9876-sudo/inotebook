const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/";

const connectMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected Successfully");
    }
    catch (error) {
        console.log("Connection Error:", error);
    }
}

module.exports = connectMongo;