import express from "express";
import Publishing from "../../models/publishing.js";

const router = express.Router();

//lay tat ca the loai
router.get('/', async (req, res) => {
    try{
        const theLoai = await Publishing.find();
        res.status(200).json(theLoai);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

export default router; 