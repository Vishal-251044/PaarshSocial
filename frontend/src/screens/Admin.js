import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";  
import Footer from "../component/Footer";  
import "../screens_CSS/Admin.css";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [totalPostsAll, setTotalPostsAll] = useState(0);
  const [searchEmail, setSearchEmail] = useState("");
  const [expandedUser, setExpandedUser] = useState(null);

  const fetchData = async (email = "") => {
    try {
      const res = await fetch(`http://localhost:5000/api/adminData?email=${email}`);
      const data = await res.json();
      setUsers(data.users || []);
      setTotalPostsAll(data.totalPostsAll || 0);
    } catch (error) {
      console.error("Error fetching admin data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(searchEmail);
  };

  const toggleExpand = (userId) => {
    setExpandedUser(expandedUser === userId ? null : userId);
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-title">Admin Dashboard</h1>
        <h3 className="admin-total">Total Posts on Platform: {totalPostsAll}</h3>

        {/* Search */}
        <form onSubmit={handleSearch} className="admin-search">
          <input
            type="text"
            placeholder="Search by email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {/* Users list */}
        {users.length > 0 ? (
          <div className="admin-user-grid">
            {users.map((user) => (
              <div key={user._id} className="admin-user-card">
                <h2>{user.fullName}</h2>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Domain:</strong> {user.domain}</p>
                <p><strong>Total Posts:</strong> {user.totalPosts}</p>
                <p><strong>Total Likes:</strong> {user.totalLikes}</p>

                <button 
                  className="toggle-posts-btn"
                  onClick={() => toggleExpand(user._id)}
                >
                  {expandedUser === user._id ? "Hide Posts" : "Show Posts"}
                </button>

                {expandedUser === user._id && (
                  <div className="admin-posts">
                    {user.posts.length > 0 ? (
                      <ul>
                        {user.posts.map((post) => (
                          <li key={post._id}>
                            <strong>{post.title}</strong> – {post.likes} likes
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No posts found</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No users found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Admin;
