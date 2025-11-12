import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, age, phone ,fitnessLevel, goal } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      phone,
      fitnessLevel,
      goal
    });

    res.json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Incorrect password" });

    const token = generateToken(user._id);

    // SET JWT as a cookie
   res.cookie("token", token, {
  httpOnly: true,
  secure: true,          // ✅ required for HTTPS
  sameSite: "none",      // ✅ allows cross-site cookies
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
})


    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logoutUser = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.json({ message: "Logged out" });
};

// Update user profile
export const updateProfile = async (req, res) => {
  try {
    const { name, email, phone, age, fitnessLevel, goal } = req.body
    
    const user = await User.findById(req.user.id)
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Update user fields
    user.name = name || user.name
    user.email = email || user.email
    user.phone = phone || user.phone
    user.age = age || user.age
    user.fitnessLevel = fitnessLevel || user.fitnessLevel
    user.goal = goal || user.goal

    await user.save()

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        age: user.age,
        fitnessLevel: user.fitnessLevel,
        goal: user.goal
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message })
  }
}
