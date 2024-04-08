// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const middleware = require('../middleware/auth')
const Video = require('../model/Video')
const User= require('../model/User')
const router = express.Router();

//Render Creator Video
router.get('/api/video/creator/:videoId', middleware, async (req, res) => {
    try {
       
        // Fetch the video by its ID
        const video = await Video.findById(req.params.videoId);
        if (!video) {
            return res.status(404).json({ success: false, error: "Video not found" });
        }

        // Check if the user is authorized to access the video
        if (video.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to retrieve video` });
        }

        // Serve the video file
        const videoPath = path.join(req.rootDir, 'uploads', video.url);
        if (!fs.existsSync(videoPath)) {// Check if the file exists
            return res.status(404).send('File not found');
        }

        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };

        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;

            head['Content-Range'] = `bytes ${start}-${end}/${fileSize}`;
            head['Accept-Ranges'] = 'bytes';
            head['Content-Length'] = chunksize;
            res.writeHead(206, head);

            const fileStream = fs.createReadStream(videoPath, { start, end });
            fileStream.pipe(res);
        } else {
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
        }
    } catch (error) {
        console.error("Error serving video:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


//Render Learner Video
router.get('/api/video/learner/:videoId', middleware, async (req, res) => {
    try {
        // Fetch the video by its ID
        const video = await Video.findById(req.params.videoId);
        if (!video) {
            return res.status(404).json({ success: false, error: "Video not found" });
        }

        // Check if the user is authorized to access the video
        const user = await User.findById(req.user._id);
        if (!user || !user.signedcourses.includes(video.course)) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to retrieve video` });
        }

        const videoPath = path.join(req.rootDir, 'uploads', video.url);
        // Check if the file exists
        if (!fs.existsSync(videoPath)) {// Check if the file exists
            return res.status(404).send('File not found');
        }

        // Serve the video file
        const stat = fs.statSync(videoPath);
        const fileSize = stat.size;
        const range = req.headers.range;
        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        };

        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
            const chunksize = end - start + 1;

            head['Content-Range'] = `bytes ${start}-${end}/${fileSize}`;
            head['Accept-Ranges'] = 'bytes';
            head['Content-Length'] = chunksize;
            res.writeHead(206, head);

            const fileStream = fs.createReadStream(videoPath, { start, end });
            fileStream.pipe(res);
        } else {
            res.writeHead(200, head);
            fs.createReadStream(videoPath).pipe(res);
        }
    } catch (error) {
        console.error("Error serving video:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});



//router.get('/api/video')

module.exports = router;
