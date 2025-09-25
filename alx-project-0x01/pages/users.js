// pages/users.js
import React from "react";
import Users from "../components/Users";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: { users }
  };
}

export default function UsersPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <Users users={users} />  {/* Passing the prop here */}
    </div>
  );
}