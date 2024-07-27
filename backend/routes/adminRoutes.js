import express from "express";
const router = express.Router();
import { authAdmin, deleteTrainer } from "../controllers/adminControllers.js";

router.post("/login", authAdmin);
router.delete("/deleteTrainer", deleteTrainer);

export default router;
