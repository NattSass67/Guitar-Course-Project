const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videos: [{ type: mongoose.Schema.ObjectId, ref: 'Video' }],
    publish: {
        type: Boolean,
        default: false
    }
    // Add more properties related to your courses
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;