import React, { useEffect, useState } from 'react';
import UserCard from '../components/common/UserCard';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={{
              street: user.address.street,
              city: user.address.city,
              zipcode: user.address.zipcode,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
