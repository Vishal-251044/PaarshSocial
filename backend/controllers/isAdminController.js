import User from "../models/User.js";

export const checkIsAdmin = async (req, res) => {
  try {
    const { username } = req.params; 
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
