import express from "express";
import { registerUser, loginUser, logoutUser,updateProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});
router.put('/profile', protect, updateProfile);

export default router;
