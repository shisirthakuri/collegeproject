const photoquote = require("../model/PhotoQuoteModel");

const photoAndQuoteUpload = async (req, res) => {
  const { quote, Name } = req.body;
  if (!req.file || !quote || !Name) {
    return res.status(400).json({ message: "plz send both image and quote" });
  }

  await photoquote.create({
    profileurl: req.file.path,
    Name,
    quote,
  });

  res.status(200).json({ message: "upload successfully!" });
};
const photoAndQuoteFetch = async (req, res) => {
  const responses = await photoquote.find();
console.log(responses)
  res.status(200).json({ message: "get successfully!", data: responses });
};

module.exports = {photoAndQuoteUpload,photoAndQuoteFetch};
