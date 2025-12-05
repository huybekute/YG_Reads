import mongoose from "mongoose";

const publishingSchema = new mongoose.Schema({
    //id nha xuat ban
    publishingID : {
        type: Number,
        required: true,
        unique: true
    },
    //ten nha xuat ban
    name : {
        type: String,
        required: true,
        unique: true,
    },

    description: String

});

const Publishing = mongoose.model('Publishing', publishingSchema);
export default Publishing;