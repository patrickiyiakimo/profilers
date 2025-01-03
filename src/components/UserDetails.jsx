import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { username } = useParams(); // Access the route param
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{user.name || user.login}</h1>
      <p>Bio: {user.bio || "No bio available"}</p>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Visit GitHub Profile
      </a>
    </div>
  );
}
