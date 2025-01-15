import express, { Request, Response } from "express";
import User from "../models/user";
import { verifyToken, verifyAdmin } from "../middleware/auth";

const router = express.Router();

router.get("/users", verifyToken, verifyAdmin, async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.put("/users/:id/role", verifyToken, verifyAdmin, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { role } = req.body;

  if (!["user", "admin"].includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { role }, { new: true }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Error updating user role" });
  }
});

export default router;
