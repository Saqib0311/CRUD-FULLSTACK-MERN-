const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const enquirySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
const enquiryModel = mongoose.model('Enquiry', enquirySchema);
module.exports=enquiryModel;