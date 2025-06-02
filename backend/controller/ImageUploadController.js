const Image = require("../model/ImageModel");

const imageUpload = async (req, res) => {
  try {
      console.log(req.files)
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Image upload failed!" });
    }
  
    const uploadPromises = req.files.map(file => {
      return Image.create({
        url: file.path,
        public_id: file.filename,
      });
    });

    const responses = await Promise.all(uploadPromises);

    res.status(200).json({
      message: "Images uploaded successfully",
      images: responses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = imageUpload;
