import express from 'express';
import multer from 'multer';
import cloudinary from '../utils/cloudinary.js';  
import streamifier from 'streamifier'; 

const router = express.Router();


const storage = multer.memoryStorage(); 
const upload = multer({ storage });

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: 'No image file provided' });
  }

const uploadStream = cloudinary.uploader.upload_stream(
  {
    resource_type: "auto",
    eager: [
      { width: 500, height: 500, crop: "fill" }, 
      { width: 1000, height: 1000, crop: "limit" },
    ],
    folder: "products", 
    quality: "auto", 
    fetch_format: "auto", 
  },
  (error, result) => {
    if (error) {
      return res.status(500).send({ message: "Error uploading to Cloudinary", error });
    }

    res.status(200).send({
      message: "Image uploaded successfully",
      image: result.secure_url, 
    });
  }
);


  streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
});

export default router;
