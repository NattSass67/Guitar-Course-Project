const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        
        const conn = await mongoose.connect("mongodb+srv://nattanunsk:1234@guitarcourse.aalkf0h.mongodb.net/Courses");
        console.log("MongoDB connected");
    }catch(err){
        console.log(err);
    }
    
}

module.exports = connectDB;
