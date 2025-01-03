import React, { useEffect, useState } from "react";

export default function Profiles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-2xl py-10">Loading...</div>;
  }

  return (
    <main className="py-16">
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <li
              key={user.id}
              className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-gray-100"
            >
              {/* Placeholder image */}
              <img
                src={`https://i.pravatar.cc/150?img=${user.id}`}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-bold">{user.name}</h2>
              <p className="text-sm text-gray-500">
                <strong>Username:</strong> {user.username}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-sm text-gray-500">
                <strong>City:</strong> {user.address.city}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Phone:</strong> {user.phone}
              </p>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Visit Website
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
