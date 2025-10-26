import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // id user
    // userID : {
    //     type : Number,
    //     required: true,
    //     unique: true
    // },
    //username
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    // email 
    email : {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    password : {
        type: String,   
        required: true
    },
    //sdt
    phone : String,
    //hoten ng dung
    fullName : {
        type: String,
        trim: true
    },
    //dia chi
    address : String,
    //lan dang nhap cuoi
    lastLogin : Date,
    //phan quyen
    role : {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;