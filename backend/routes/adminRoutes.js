import express from "express";
import Trainer from "../models/trainerModel.js";
import User from "../models/userModel.js"; 
const router = express.Router();
import {
  authAdmin,
  deleteTrainer,
  getTrainers,
} from "../controllers/adminControllers.js";

router.post("/login", authAdmin);
router.delete("/deleteTrainer", deleteTrainer);
router.get("/get-trainers", getTrainers);

router.put('/assign-program', async (req, res) => {
  const { trainerId, programId } = req.body;

  try {
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    if (!trainer.programs.includes(programId)) {
      trainer.programs.push(programId);
      await trainer.save();
    }

    res.json({ message: 'Program assigned successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

router.put('/assign-trainer', async (req, res) => {
  const { userId, trainerId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.trainer_id = trainerId;
    user.isAssigned = true;
    await user.save();

    res.json({ message: 'Trainer assigned successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
