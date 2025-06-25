const Image = require("../model/ImageModel");

const imageUpload = async (req, res) => {
  try {
    const{ImageCategory}=req.body
    console.log(ImageCategory,"ho image category")
      console.log(req.files)
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Image upload failed!" });
    }
  
    const uploadPromises = req.files.map(file => {
      return Image.create({
        url: file.path,
        public_id: file.filename,
        ImageCategory
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

const getImages = async (req, res) => {
  try {

   const { category } = req.query;
   console.log(category)
    const images = await Image.find({ ImageCategory:category})
      .sort({ createdAt: -1 })
      console.log(images)
    res.status(200).json({
      images,
    });
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ message: "Server error while fetching images" });
  }
};

module.exports = {imageUpload,getImages};
