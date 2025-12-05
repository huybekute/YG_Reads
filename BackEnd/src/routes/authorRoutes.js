import express from "express";
import Author from "../../models/author.js";

const router = express.Router();

//lay tat ca tac gia
router.get('/', async(req, res) => {
    try{
        const tacgia = await Author.find();
        res.status(200).json(tacgia);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//them tac gia
router.post('/', async (req, res) => {
    try{
        if (!req.body.authorID || !req.body.name) {
            return res.status(400).json({ message: "authorID và name là bắt buộc" });
        }
        const newTacGia = await Author.create(req.body);
        res.status(201).json(newTacGia);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//xoa tac gia
router.delete('/:id', async (req, res) => {
    try{
        const deleteTacGia = await Author.findOneAndDelete({
            authorID: req.params.id
        });
        if(!deleteTacGia){
            return res.status(404).json({
                message: "Khong tim thay tac gia"
            });
        }
        res.status(200).json({
            message: "Xoa tac gia thanh cong",
            deleteTacGia
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//lay chi tiet tac gia
router.get('/:id', async (req, res) => {
    try{
        const tacGia = await Author.findOne({
            authorID: req.params.id
        });
        if(!tacGia){
            return res.status(404).json({
                message: "Khong tim thay tac gia voi ID nay"
            });
        }
        res.status(200).json(tacGia);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//cap nhat tac gia
router.put('/:id', async (req, res) => {
    try{
        const updateTacGia = await Author.findOneAndUpdate(
            {authorID: req.params.id},
            req.body,
            {new:true, runValidators: true}
        );
        if(!updateTacGia){
            return res.status(404).json({
                message: "Khong tim thay tac gia de cap nhat"
            });
        }
        res.status(200).json(updateTacGia);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;