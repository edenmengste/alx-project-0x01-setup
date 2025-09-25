// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto hover:shadow-lg transition">
      <img
        src={`https://i.pravatar.cc/150?u=${user.id}`}
        alt={user.name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{user.name}</h2>
      <p className="text-gray-600 text-center">{user.email}</p>
    </div>
  );
};

export default UserCard;
