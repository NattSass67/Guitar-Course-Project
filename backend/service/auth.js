const User = require("../model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

//register
router.post('/api/auth/create-user', (req, res) => {
    const user = new User();
    console.log(req.body);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    //user.role = req.body.role;
    //user.creator = req.body.creator;

    user.save().then(savedData => { //use this instead called promise it will save database into mongo collections
        res.status(201).send({success:true, savedData});
    }).catch(error => {
        res.status(400).send({ success: false});
        console.log(error.stack)
    });

})


//login
router.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Compare hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }

        // If password is correct, create a token
        const token = createToken(user);

        // Return the token as well as any other user data you want
        res.status(200).json({ success: true, token: token, _id: user._id, email: user.email, role: user.role, creator: user.creator, username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});



//create-token



// Function to create token
function createToken(user) {
    // Here you can specify the payload you want to include in the token
    // For example, you might include user ID, username, role, etc.
    const payload = {
        id: user._id,
        username: user.username,
        role: user.role
        // Add other properties as needed
    };
    // Sign the token with a secret key
    // You should store your secret key in a secure environment and not hardcode it here
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' }); // Change the expiresIn value as per your requirement

    return token;
}

module.exports = { createToken };


module.exports = router;