import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Trainer from "../models/trainerModel.js";

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decodedToken = jwt.verify(
        token,
        process.env.JWT_ACCESS_TOKEN_SECRET
      );

      req.trainer = await Trainer.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorised. Token failed");
    }
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) next();
  else {
    res.status(401);
    throw new Error("Not authorised admin");
  }
};

export { protectRoute, isAdmin };
