const enquiryModel = require('../../models/enquirymodel');
const enquiryInsert = (req,res)=>{
    const { name, email, phone, message } = req.body;
    const enquiry=new enquiryModel({name, email, phone, message});
    enquiry.save().then(()=>{
res.status(200).json({
    message: "Enquiry Inserted Successfully"
})}).catch((e)=>{
    res.status(500).json({
        message: "Error inserting enquiry",
        error: e.message
    });
});
}
const enquiryList =async (req, res) => {
    const enquiry = await enquiryModel.find();
    res.status(200).json({
        message: "Enquiry List",
        enquiry
    });
}
const enquiryDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await enquiryModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Enquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enquiry", error: error.message });
  }
};
const enquiryUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    await enquiryModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: "Enquiry updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating enquiry", error: error.message });
  }
};


module.exports={enquiryInsert, enquiryList,enquiryDelete,enquiryUpdate};