import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    //id loai
    categoryID : {
        type: Number,
        required: true,
        unique: true
    },
    //ten loai
    name : {
        type: String,
        required: true,
        unique: true
    }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;