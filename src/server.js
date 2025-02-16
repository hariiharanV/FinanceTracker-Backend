import express from 'express'
import db from './db.js'
import connectDB from '../src/config/mongodb.js'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import ExpenseRoutes from '../src/routes/ExpenseRoutes.js'
import IncomeRoutes from '../src/routes/IncomeRoutes.js'
import InvestRoutes from '../src/routes/InvestRoutes.js'
import BucketRoutes from '../src/routes/BucketRoutes.js'


const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = ['https://financetracker-styk.onrender.com']

app.use(express.json());
app.use(cookieParser())
app.use(cors({origin:allowedOrigins, credentials:true}))

connectDB();
//db.connect();

app.use('/expense',ExpenseRoutes)
app.use('/income',IncomeRoutes);
app.use('/investment',InvestRoutes);
app.use('/bucketList',BucketRoutes);

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

