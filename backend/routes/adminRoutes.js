import express from "express";
const router = express.Router();
import {
  authAdmin,
  deleteTrainer,
  getTrainers,
} from "../controllers/adminControllers.js";

router.post("/login", authAdmin);
router.delete("/deleteTrainer", deleteTrainer);
router.get("/get-trainers", getTrainers);

export default router;
