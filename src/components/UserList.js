import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const usersWithActiveStatus = response.data.map(user => ({
          ...user,
          isActive: false,
        }));
        setUsers(usersWithActiveStatus);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const toggleActiveStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    ));
  };

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} toggleActiveStatus={toggleActiveStatus} />
      ))}
    </div>
  );
};

export default UserList;
