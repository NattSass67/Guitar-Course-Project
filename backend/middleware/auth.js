const jwt = require('jsonwebtoken');
const User = require("../model/User");

async function verifyToken(req, res, next) {
    // Get the authorization header
    try {
        const authHeader = req.headers['authorization'];
        // Check if authorization header is present
        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }
        // Check if the authorization header starts with 'Bearer '
        if (!authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Bearer token missing' });
        }
        // Extract the token
        const token = authHeader.split(' ')[1];
        // Verify the token
        //console.log(token)
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const data = await User.findOne({ _id: decoded.id }).select("-password"); //return user but without password
        console.log(data);
        req.user = data;

        next(); // Continue with the next middleware or route handler

    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Not authorized to access this route' });
    }

};


module.exports = verifyToken;
