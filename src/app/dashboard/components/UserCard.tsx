"use client";

import { useEffect, useState } from "react";

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data.slice(0, 4)); // Display only 4 users
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
          <img
            src={`https://i.pravatar.cc/100?u=${user.id}`} // Random avatar generator
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-gray-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-xs">{user.company.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
