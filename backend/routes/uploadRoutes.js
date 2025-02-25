import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary.js';  
import streamifier from 'streamifier';

const router = express.Router();

// Configure multer for in-memory storage and file size limit
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, 
});

const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'image', 
        folder: 'uploads', 
        format: 'webp', 
        quality: 'auto',
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result.secure_url);
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

// Route for image upload
router.post('/', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadToCloudinary(req.file.buffer);

    res.status(200).json({
      message: 'Image uploaded successfully',
      image: imageUrl,
    });
  } catch (error) {
    console.error('Cloudinary Upload Error:', error);
    res.status(500).json({ message: 'Error uploading to Cloudinary', error });
  }
});

export default router;
