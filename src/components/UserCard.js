import React from 'react';
import './UserCard.css';

const UserCard = ({ user, toggleActiveStatus }) => {
  return (
    <div className={`user-card ${user.isActive ? 'active' : ''}`}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => toggleActiveStatus(user.id)}>
        {user.isActive ? 'Deactivate' : 'Activate'}
      </button>
    </div>
  );
};

export default UserCard;
