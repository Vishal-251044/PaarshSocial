import User from "../models/User.js";
import News from "../models/News.js";

export const getAdminData = async (req, res) => {
  try {
    const { email } = req.query; 

    let userFilter = {};
    if (email) {
      userFilter.email = { $regex: email, $options: "i" };
    }

    const users = await User.find(userFilter);

    const usersWithStats = await Promise.all(
      users.map(async (user) => {
        const posts = await News.find({ username: user.username });

        return {
          _id: user._id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          domain: user.domain,
          totalPosts: posts.length,
          totalLikes: posts.reduce((sum, post) => sum + post.likes, 0),
          posts, 
        };
      })
    );

    // sort by totalLikes
    usersWithStats.sort((a, b) => b.totalLikes - a.totalLikes);

    // total posts across platform
    const totalPostsAll = await News.countDocuments();

    res.json({ users: usersWithStats, totalPostsAll });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
