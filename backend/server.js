import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js";
import trainerRoutes from "./routes/trainerRoutes.js";
import pgmRoutes from "./routes/pgmRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import stripeRoutes from "./routes/stripeRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/admin", adminRoutes);
app.use("/api/trainer", trainerRoutes);
app.use("/api/program", pgmRoutes);
app.use("/api/users", userRoutes);
app.use("/api/pay", stripeRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.yellow.bold)
);
