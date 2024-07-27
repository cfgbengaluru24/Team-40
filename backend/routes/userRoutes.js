import express from "express";
import {
  authUser,
  getUserProfile,
  getUserData,
  registerUser,
  getAllUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userControllers.js";
import { protectRoute, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protectRoute, isAdmin, getAllUsers);

router.route("/login").post(authUser);

router.route("/profile").get(protectRoute, getUserProfile);

// router.route("/passport/data").post(getUserData);

router
  .route("/:id")
  .delete(protectRoute, isAdmin, deleteUser)
  .get(protectRoute, isAdmin, getUserById)
  .put(protectRoute, isAdmin, updateUser);

export default router;
