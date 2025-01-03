import React, { useEffect, useState } from "react";

export default function Profiles() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="py-16">
        <h1 className="text-center text-4xl font-semibold mb-8">GitHub Users</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <li
              key={user.id}
              className="border rounded-lg shadow-lg p-4 flex flex-col items-center px-20"
            >
              <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mb-4" />
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p className="text-sm text-gray-500">
                <strong>GitHub ID:</strong> {user.id}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Type:</strong> {user.type}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
