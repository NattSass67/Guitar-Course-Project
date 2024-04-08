const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    signedcourses: [{ type: mongoose.Schema.ObjectId, ref: 'Course' }],
    creator:{
        type:Boolean,
        default:false,
    }

    // Add other properties as needed for your application
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

//define match password method 
userSchema.methods.matchPassword= async function(password){
    return await bcrypt.compare(password,this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
