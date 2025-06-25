const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const { pdf } = require('../utils/cloudinary');
const upload = multer({ storage });
const pdfs= multer({storage:pdf})
module.exports = {upload,pdfs};
