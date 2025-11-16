import express from "express";
import Book from "../../models/book.js";

const router = express.Router();


//lay tat ca cac sach
router.get('/', async(req, res) => {
    try{
        const sach = await Book.find();
        //200: OK
        res.status(200).json(sach);
    }
    catch(error){
        //500 internal server error
        res.status(500).json({
            message: error.message
        });
    }
});

//add sach

router.post('/', async(req, res) => {
    try{
        const newSach = await Book.create(req.body);
        //201: Created
        res.status(201).json(newSach)
    }
    catch(error){
        //400: bad request
        res.status(400).json({
            message: error.message
        });
    }
});

// remove sach
router.delete('/:bookID', async(req, res) => {
    try{
        const deleteSach = await Book.findOneAndDelete(
            {BookID: req.params.id}
        );
        if(!deleteSach){
            return res.status(404).json({
                message: "Khong tim thay sach de xoa"
            });
        }
        res.status(200).json({
            message: "Xoa sach thanh cong",
            deleteSach
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//lay chi tiet sach
router.get('/:bookID', async(req, res) => {
    try{
        const sach = await Book.findOne({
            BookID: req.params.id
        });
        if(!sach){
            return res.status(404).json({
                message: "Khong tim thay sach voi ID nay"
            });
        }
        res.status(200).json(sach);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//cap nhat sach
router.put('/:bookID', async(req, res) => {
    try{
        const updateSach = await Book.findOneAndUpdate(
            {BookID: req.params.id},
            req.body,
            {new: true, runValidators: true}
        );
        if(!updateSach){
            return res.status(404).json({
                message: "Khong tim thay sach voi ID nay de cap nhat"
            });
        }
        res.status(200).json(updateSach);
    }
    catch(error){
        res.status(422).json({
            message: error.message
        });
    }
});

export default router;