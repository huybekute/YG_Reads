import express from "express";
import User from "../../models/user.js";
import bcrypt from "bcrypt"

const router = express.Router();

    //them user
router.post('/', async(req, res) => {
    try{
        //ma hoa mk
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);

        const newUser = await User.create({
            ...req.body,
            password: hashPass
        })

        res.status(201).json({
            message: 'Đăng ký thành công',
            user: {
                username: newUser.username, 
                email: newUser.email,
                _id: newUser._id
            }
        })
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
});


//dang nahp
router.post('/login', async(req, res) => {
    const {usernameLogin, passwordLogin} = req.body;
    try{

        //tim kiem thong tin usernmae
        const user = await User.findOne({
            $or: [{username: usernameLogin}, {email: usernameLogin}]
        });

        if(!user){
            return res.status(401).json({
                message: "Thông tin đăng nhập ko hợp lệ"
            })
        }

        //kiem tra mat khau
        const match = await bcrypt.compare(passwordLogin, user.password);
        if(!match){
            return res.status(401).json({
                message: "Thông tin đăng nhập ko hợp lệ"
            })
        }

        user.lastLogin = new Date();
        await user.save();

        res.status(200).json({
            message: "Đăng nhập thành công",
            user: { 
                username: user.username, 
                email: user.email, 
                role: user.role, 
                _id: user._id
            }
        });
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
});


// lay thong tin user
router.get('/:username', async (req, res) => {
    try{
        const user = await User.findOne({username : req.params.username});
        if(!user){
            return res.status(404).json({
                message : "Không tìm thấy user"
            });
        }
        const infoUser = {
            username : user.username,
            email: user.email,
            fullName: user.fullName,
            phone: user.phone,
            address: user.address,
            createdAt: user.createdAt,
        }

        res.json(infoUser);
    }
    catch(error){
        res.status(500).json({
            message: error.message
        });
    }
})


router.get('/', (req, res) => {
    // Trả về thông báo API sẵn sàng và hướng dẫn sử dụng
    res.status(200).json({ 
        message: "API Xác thực sẵn sàng. Dùng POST /api/auth để Đăng ký và POST /api/auth/login để Đăng nhập." 
    });
});

export default router;