import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler,notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("mahesh....");
});

// app.get("/api/categories/:category", (req, res) => {
//   const category = products.find((p) => p.category === req.params.category);

//   res.send(category);
// });

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running at ${process.env.NODE_ENV} environment at port ${PORT}`
      .yellow.bold
  )
);