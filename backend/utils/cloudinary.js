const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'mern_uploads', // optional folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp','pdf']
  }
});

const pdf = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'pdfs', // optional folder in Cloudinary
    allowed_formats: ['pdf'],
      resource_type: () => 'raw'
  }
});

module.exports = {
  cloudinary,
  storage,
  pdf
};
