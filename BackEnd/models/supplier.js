import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    //id nha cung cap
    supplierID: {
        type: Number,
        required: true,
        unique: true
    },
    // ten nha cung cap
    name : {
        type: String,
        required: true,
        trim: true
    }
});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;