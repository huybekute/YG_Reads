// import axios from "axios";

// const API_URL = 'http://localhost:5000/api/books';

// class bookServices{

//     //lay tat ca sach
//     async getAllBooks(){
//         try{
//             const res = await axios.get(API_URL);
//             return res.data;
//         }
//         catch(error){
//             console.log("Loi khi lay ds", error);
//             throw error;
//         }
//     }

//     //them sach
//     async createBooks(bookData){
//         try{
//             const res = await axios.post(API_URL, bookData);
//             return res.data
//         }
//         catch(error){
//             console.log("Loi khi them sach", error);
//             throw error;
//         }
//     }
    
// }

// export default new bookServices();