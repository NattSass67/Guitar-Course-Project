const mongoose = require('mongoose');
const Course = require('./Course');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  course: {
    type: mongoose.Schema.ObjectId,
    ref: 'Course',
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  // Add more properties related to your videos
});

// Define pre 'deleteOne' hook to remove video ID from Course array
videoSchema.pre('deleteOne', async function (next) {
  try {
    // Find the course containing this video ID and update it to remove the video
    console.log("PreDelete Id", this.getFilter())
    const video = await Video.findOne(this.getFilter()) //use this.getFilter() to get the filter object for the deleteOne operation
    const response = await Course.updateOne({ _id: video.course }, { $pull: { videos: video._id } })
    console.log("update", response);
    next();
  } catch (error) {
    next(error);
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;