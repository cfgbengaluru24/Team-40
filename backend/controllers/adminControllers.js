import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Trainer from "../models/trainerModel.js";

const ADMIN_EMAIL = "admin";
const ADMIN_PASSWORD = "1234";

const authAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = generateToken(email);

    res.json({
      email: ADMIN_EMAIL,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const deleteTrainer = asyncHandler(async (req, res) => {
  const trainerId = req.body.id;

  const trainer = await Trainer.findById(trainerId);

  if (trainer) {
    await trainer.remove();
    res.json({ message: "Trainer removed successfully" });
  } else {
    res.status(404);
    throw new Error("Trainer not found");
  }
});

export { authAdmin, deleteTrainer };
