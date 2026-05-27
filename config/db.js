const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // This must match the name in your .env file (URI)
        const conn = await mongoose.connect(process.env.URI); 
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;