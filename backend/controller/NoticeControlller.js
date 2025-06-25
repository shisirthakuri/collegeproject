const NoticeAll = require("../model/NoticeAllModel")
const NoticeBanner = require("../model/NoticeModel")

const NoticeBannerUpload = async(req,res)=>{
const{content}=req.body
console.log(content)
if(!content){
    return res.status(400).json({message:'content not found'})
}
await NoticeBanner.create({
    content
})

res.status(200).json({message:"Notice is setup successfully!",data:content})
}

const NoticeAllUpload = async (req, res) => {
  try {
    const topic=req.body.topic
      console.log(req.file,"backend")
    if (!req.file ||!topic) {
      return res.status(400).json({ message: "Image upload failed!" });
    }
  
      const pdf  = await NoticeAll.create({
        url: req.file.path,
        public_id: req.file.originalname,
        Topic:topic
      });

    res.status(200).json({
      message: "notice uploaded successfully",
      pdf
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const NoticeBannerFetch = async (req, res) => {
  try {
    const responses = await NoticeBanner.find()

    res.status(200).json({
      message: "Images uploaded successfully",
      data: responses[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
const DeleteNoticeBannerFetch = async (req, res) => {
  try {
    const responses = await NoticeBanner.deleteOne()
    console.log(responses)
       if(responses.deletedCount === 0){
      return     res.status(400).json({
      message: "first add Notice here.",
    });
    }
    res.status(200).json({
      message: "Notice delete successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getNoticeAll = async (req, res) => {
  try {
    const notices = await NoticeAll.find().sort({ createdAt:-1 }) 

    console.log(notices)
    res.status(200).json({
      message: "Notices fetched successfully!",
      notices,
    });
  } catch (error) {
    console.error("Error fetching notices:", error);
    res.status(500).json({
      message: "Server error while fetching notices",
    });
  }
};

module.exports={NoticeBannerUpload,NoticeAllUpload,NoticeBannerFetch,DeleteNoticeBannerFetch,getNoticeAll}