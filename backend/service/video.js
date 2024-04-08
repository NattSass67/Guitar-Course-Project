const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');
const express = require('express');
const Course = require('../model/Course')
const Video = require('../model/Video')
const middleware = require('../middleware/auth')

const router = express.Router();
const upload = multer();
//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.

router.get('/api/getcreator-video/:videoId', middleware, async (req, res) => {
    try {
        const video = await Video.findById(req.params.videoId);
        if (!video) {
            return res.status(404).json({ success: false, error: "Video not found" });
        }
        console.log("get video by Id", video)
        if (video.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to retrieve video` });
        }
        res.status(200).send({ success: true, video });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server Error" });

    }
});

router.post('/api/upload/:courseId', middleware, upload.array("video"), async (req, res) => {
    try {
        const video = new Video({
            title: req.body.title,
            description: req.body.description,
            course: req.params.courseId,
            user: req.user._id
        });

        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        if (course.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to upload video` });
        }

        const file = req.files[0];
        const fileName = `${Date.now()}-${file.originalname}`;
        const filePath = path.join(req.rootDir, 'uploads', fileName);
        video.url = fileName;

        await fs.writeFile(filePath, file.buffer);
        await video.save();

        await Course.updateOne({ _id: req.params.courseId }, { $push: { "videos": video._id } });

        res.status(201).json({ success: true, savedData: video });
    } catch (error) {
        console.error("Error uploading video:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

    // Move the first file from the temporary folder to the specified destination
    // await fs.writeFile(filePath, file.buffer);
    // res.json({ message: "Successfully uploaded files" });



router.delete('/api/delete-video/:videoId', middleware, async (req, res) => {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
        return res.status(404).json({ success: false, error: "Video not found" });
    }
    if (video.user.toString() !== req.user._id.toString() || !req.user.creator) {
        return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to delete video` });
    }

    Video.deleteOne({ _id: req.params.videoId })
        .then(result => {
            console.log(result);
            if (result.deletedCount === 0) {
                res.status(404).json({ success: false, message: "Video not found" });
            } else {
                res.status(200).json({ success: true, message: "Video deleted successfully" });
            }
        })
        .catch(error => {
            console.error("Error deleting video:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        });

    // Delete video file from the filesystem
    const videoFilePath = path.join(req.rootDir, 'uploads', video.url);
    fs.unlink(videoFilePath).catch((err) => {
        if (err) {
            console.error("Error deleting video file:", err);
        }
    });
});


router.get('/api/getlearner-video/:videoId', middleware, async (req, res) => {
    try {
        const video = await Video.findById(req.params.videoId);
        if (!video) {
            return res.status(404).json({ success: false, error: "Video not found" });
        }

        const user = await User.findById(req.user._id);

        if (!user || !user.signedcourses.includes(video.course)) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to retrieve video` });
        }
        
        res.status(200).send({ success: true, video });

    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Internal Server Error" });

    }
});






module.exports = router;