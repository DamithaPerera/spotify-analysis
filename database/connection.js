const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const connectionURI = `mongodb+srv://gembo-dev-appuser:P6JgkILWKqubRj3l@cluster0.fp3le.mongodb.net/spotify-search?retryWrites=true&w=majority`;
        await mongoose.connect(connectionURI);
    } catch (error) {
        console.log('err', error)
    }
};

module.exports = connectDB;