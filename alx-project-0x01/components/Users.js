// components/Users.js
import React from "react";

export default function Users({ users }) {
  return (
    <section>
      {users.map((u) => (
        <div key={u.id} className="user-card">
          <p>{u.name}</p>
        </div>
      ))}
    </section>
  );
}