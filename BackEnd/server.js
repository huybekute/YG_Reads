import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import bookRoutes from './src/routes/bookRoutes.js'
import authorRoutes from './src/routes/authorRoutes.js'
import categoryRoutes from './src/routes/categoryRoutes.js'
import publishingRoutes from './src/routes/publishingRoutes.js'
import supplierRoutes from './src/routes/supplierRoutes.js'
import userRoutes from './src/routes/userRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Da ket noi DB");
        app.use('/api/books', bookRoutes);
        app.use('/api/authors', authorRoutes);
        app.use('/api/categories', categoryRoutes);
        app.use('/api/publishings', publishingRoutes);
        app.use('/api/suppliers', supplierRoutes);
        // app.use('/api/users', userRoutes);
        app.use('/api/auth', userRoutes);

        app.get('/', (req, res) => {
            res.send("Server san sang");
        });

        app.listen(PORT, () => {
            console.log("Thanh cong");
        });
    })
    .catch(err => {
        console.log("Ch ket noi duoc DB", err);
        process.exit(1);
    });


