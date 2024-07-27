import express from "express";
import Trainer from "../models/trainerModel.js";
import {
  authTrainer,
  registerTrainer,  
  getTrainees,
  countTrainees,
} from "../controllers/trainerControllers.js";

const router = express.Router();

router.post("/login", authTrainer);
router.post("/register", registerTrainer);
router.get("/trainees", getTrainees);
router.get("/trainees/count", countTrainees);




export default router;
