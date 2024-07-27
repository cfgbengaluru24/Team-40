import asyncHandler from "express-async-handler";
import Trainer from "../models/trainerModel.js";
import generateToken from "../utils/generateToken.js";

const authTrainer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const trainer = await Trainer.findOne({ email });

  if (trainer && (await trainer.matchPassword(password))) {
    const token = generateToken(trainer._id);

    res.json({
      id: trainer._id,
      email: trainer.email,
      name: trainer.name,
      token,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const registerTrainer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const trainerExists = await Trainer.findOne({ email });

  if (trainerExists) {
    res.status(400);
    throw new Error("Trainer already registered");
  }

  const trainer = await Trainer.create({
    name,
    email,
    password,
  });

  if (trainer) {
    const token = generateToken(trainer._id);
    res.status(201).json({
      id: trainer._id,
      email: trainer.email,
      name: trainer.name,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid trainer data");
  }
});

const getTrainees = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.user.id).populate("trainee");

  if (trainer) {
    res.json(trainer.trainee);
  } else {
    res.status(404);
    throw new Error("Trainer not found");
  }
});

const countTrainees = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.trainer.id);

  if (trainer) {
    const traineeCount = trainer.trainee.length;
    res.json({ traineeCount });
  } else {
    res.status(404);
    throw new Error("Trainer not found");
  }
});

export { authTrainer, registerTrainer, getTrainees, countTrainees };
