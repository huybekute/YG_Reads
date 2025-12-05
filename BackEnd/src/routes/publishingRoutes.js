import express from "express";
import Publishing from "../../models/publishing.js";

const router = express.Router();

//lay tat ca nha xuat ban
router.get('/', async (req, res) => {
    try{
        const NXB = await Publishing.find();
        res.status(200).json(NXB);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});


//them nxb
router.post('/' async(req, res) => {
    try{
        if(!req.body.publishingID || !req.body.name){
            return res.status(400).json({message: "Khong tim thay nha xuat ban voi ID nay"});
        }
        const newNXB = await Publishing.create(req.body);
        res.status(201).json(newNXB);
    }
    catch(error){
        res.status(500).json({
            message: error.message  
        })
    }
})

//xoa nxb
router.delete('/:id' async(req, res) => {
    try{
        const deleteNXB = await Publishing.findOneAndDelete({
            publishingID: req.params.id
        });
        if(!deleteNXB){
            return res.status(404).json({
                message: "Khong tim thay NXB"
            });
        }
        res.status(200).json({
            message: "Xoa NXB thanh cong",
            deleteNXB
        })
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
})

export default router; 