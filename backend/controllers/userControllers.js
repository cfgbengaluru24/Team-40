import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const getAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find({});

  res.json({
    users: allUsers,
  });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({
      message: "User removed from DB",
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) res.json(user);
  else {
    res.status(404);
    throw new Error("User does not exist");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    user.name = req.body.name || user.name;
    user.isConfirmed = req.body.email === user.email;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;
    const updatedUser = await user.save();
    if (updatedUser) {
      res.json({
        id: updatedUser._id,
        email: updatedUser.email,
        name: updatedUser.name,
        isAdmin: updatedUser.isAdmin,
        isConfirmed: updatedUser.isConfirmed,
      });
    }
  } else {
    res.status(400);
    throw new Error("User not found.");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);

    res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token,
    });
  } else {
    res.status(401);
    throw new Error(user ? "Invalid Password" : "Invalid email");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, contact, organization } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already registered");
  }

  const user = await User.create({
    name,
    email,
    password,
    contact,
    organization,
    // isAdmin
  });

  if (user) {
    const token = generateToken(user._id);

    res.status(201).json({
      id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token,
      contact,
      organization,
    });
  } else {
    res.status(400);
    throw new Error("User not created");
  }
});

const getUserData = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);
  if (user) {
    res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not authorised to view this page");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not authorised to view this page");
  }
});

export {
  authUser,
  getUserProfile,
  getUserData,
  registerUser,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
};
