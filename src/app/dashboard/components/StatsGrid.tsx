"use client";

import { useEffect, useState } from "react";

const StatsGrid = () => {
  const [stats, setStats] = useState({
    users: 0,
    posts: 0,
    revenue: 0, // Fake revenue
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
        const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!usersRes.ok || !postsRes.ok) throw new Error("Failed to fetch data");

        const users = await usersRes.json();
        const posts = await postsRes.json();

        setStats({
          users: users.length,
          posts: posts.length,
          revenue: Number(users.length) * 1000, // Fake revenue calculation
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading stats...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-foreground text-2xl font-bold">{stats.users}</h3>
        <p className="text-gray-600">Total Users</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-2xl font-bold">{stats.posts}</h3>
        <p className="text-gray-600">Total Posts</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 text-center">
        <h3 className="text-2xl font-bold">${stats.revenue}</h3>
        <p className="text-gray-600">Total Revenue</p>
      </div>
    </div>
  );
};

export default StatsGrid;
