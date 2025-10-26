import express from "express";
import Supplier from "../../models/supplier.js";

const router = express.Router();

// lay tat ca nha cung cap
router.get('/', async (req, res) => {
    try{
        const nhaCungCap = await Supplier.find();
        res.status(200).json(nhaCungCap);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});

//them nha cung cap
router.post('/', async (req, res) => {
    try{
        const newNhaCungCap = await Supplier.create(req.body);
        res.status.json(newNhaCungCap);
    }
    catch(error){
        res.status(400).json({
            message: error.message
        });
    }
});

export default router;