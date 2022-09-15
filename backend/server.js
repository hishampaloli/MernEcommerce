import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRouter from './routes/userRoute.js'
import  {notFound, errorHandler} from './middlewares/errorMiddleware.js'

dotenv.config();
connectDB();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRouter)

app.use(notFound);
app.use(errorHandler);


app.listen(
  process.env.PORT || 3001,
  console.log("786 ready to go".bgGreen.bold)
);
