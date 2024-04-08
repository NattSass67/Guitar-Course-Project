const express = require('express');
const router = express.Router();
const Course = require('../model/Course');
const User = require("../model/User");
const middleware = require('../middleware/auth')

router.post('/api/create-course', middleware, async (req, res) => {
    try {
        // Extract data from the request body
        const { title, description } = req.body;

        // Check if required fields are provided
        if (!title || !description) {
            return res.status(400).json({ success: false, error: "Title and description are required" });
        }

        // Create a new Course instance
        const course = new Course({
            user: req.user._id,
            title,
            description
        });

        // Save the course to the database
        const savedCourse = await course.save();

        // Return the saved course as the response
        res.status(200).json({ success: true, data: savedCourse });
    } catch (error) {
        // If an error occurs during course creation, handle it
        console.error("Error creating course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});


//get all course by Creator's Id
router.get('/api/creator-course', middleware, (req, res) => {
    Course.find({ user: req.user._id }).populate('user').then(data => {
        res.status(200).send({ success: true, data });
    }).catch(err => {
        console.log(err);
        res.status(400).send({ success: false });
    })
})


router.get('/api/creator-course/:id', middleware, async (req, res) => {
    try {
        // Find the course by its ID
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        // Check if the user is authorized to access the course
        if (course.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to get Course` });
        }

        // Populate the 'videos' field of the course
        const populatedCourse = await Course.findById(req.params.id).populate('videos');

        // Send the populated course data in the response
        res.status(200).json(populatedCourse);
    } catch (error) {
        // If an error occurs during course retrieval, handle it
        console.error("Error getting course by ID:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});



router.get('/api/learner-course/:id', middleware, async (req, res) => {
    try {

        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }
        const user = await User.findById(req.user._id);

        if (!user || !user.signedcourses.includes(req.params.id)) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to get Course` });
        }

        Course.find({ _id: req.params.id }).populate('videos').then(data => {
            console.log(data[0])
            res.status(200).send(data[0]);
        }).catch(err => {
            console.log(err);
            res.status(400).send({ success: false });
        })
    }catch(error){
        console.error("Error fetching learner course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


router.put('/api/course/publish/:id', middleware, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        if (course.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to get Course` });
        }

        // Update the course's publish status to true
        course.publish = true;

        // Save the updated course
        await course.save();

        // Return the updated course as response
        res.status(200).json({ success: true, data: course });
    } catch (error) {
        console.error("Error publishing course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }

})

router.put('/api/course/private/:id', middleware, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        if (course.user.toString() !== req.user._id.toString() || !req.user.creator) {
            return res.status(401).json({ success: false, message: `User ${req.user._id} is not authorized to get Course` });
        }

        // Update the course's publish status to true
        course.publish = false;

        // Save the updated course
        await course.save();

        // Return the updated course as response
        res.status(200).json({ success: true, data: course });
    } catch (error) {
        console.error("Error publishing course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }

})

router.get('/api/published-course', async (req, res) => {
    Course.find({ publish: true }).then(data => {
        res.status(200).send({ success: true, data })
    }).catch(error => {
        console.error("Error fetching published courses:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    })

});

router.put('/api/enroll-course', middleware, async (req, res) => {
    try {
        const course = await Course.findById(req.body.courseId);
        if (!course) {
            return res.status(404).json({ success: false, error: "Course not found" });
        }

        // Add the course ID to the user's signedcourses array
        await User.updateOne({_id:req.user._id},{ $addToSet: { "signedcourses": req.body.courseId } });

        // Save the updated user document to the database

        // Return a success response
        res.status(200).json({ success: true, message: "User enrolled in the course successfully" });
    } catch (error) {
        // If an error occurs during the enrollment process, handle it
        console.error("Error enrolling user in the course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

router.get('/api/enrolled-course', middleware, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate('signedcourses');
        console.log(user)
        // Return a success response
        res.status(200).json({ success: true, data: user.signedcourses });
    } catch (error) {
        // If an error occurs during the enrollment process, handle it
        console.error("Error enrolling user in the course:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});



module.exports = router;


