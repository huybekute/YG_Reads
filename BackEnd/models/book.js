import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    //id sach
    bookID: {
        type: Number,
        required: true, 
        unique: true
    },
    //ten sach
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    //so luong
    quantity: {
        type: Number,
        required: true
    },
    //anh
    image: {
        type: String, 
        required: true
    },
    //gia hien tai
    price: {
        type: Number, 
        required: true
    },
    //gia goc
    oldPrice: {
        type: Number, 
        required: true
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    //nha cung cap
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },
    //nha xuat ban
    publishing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publishing"
    },
    //tac gia
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true
    },
    //hinh thuc bia
    coverFormat: String,
    //nam xuat ban
    publicationYear: Number,
    //trong luong
    weight: Number,
    //kich thuoc
    packagingSize: String,
    //so trang
    numberOfPage: Number,
    //mo ta
    description: String,
    //da ban
    sold: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true
});


const Book = mongoose.model('Book', bookSchema);
export default Book;