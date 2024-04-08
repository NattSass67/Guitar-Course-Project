// server.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();


const videoUploader= require('./service/video')
const videoRender= require('./service/renderVideo');
const courseService= require('./service/course');
const connectDB= require('./service/connectDB');
const auth= require('./service/auth');
const app = express();
const port = 5000;

connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use((req,res,next)=>{ //define and set rootDir property to the request
    req.rootDir = __dirname;
    next();
})

app.use(auth);
app.use(courseService);
app.use(videoUploader);
app.use(videoRender);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
