import mongoose from "mongoose";

const authorSchema = new mongoose.Schema ({
    //id tac gia
    authorID : {
        type: Number,
        unique: true,
        required: true
    },
    //ten tac gia
    name : {
        type: String,
        trim: true,
        required: true
    },
    //mo ta
    description: String
});

const Author = mongoose.model('Author', authorSchema);
export default Author;