import React from 'react';

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface UserProps {
  name: string;
  email: string;
  address: Address;
}

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="border p-4 rounded">
    <h2>{name}</h2>
    <p>Email: {email}</p>
    <p>Address: {`${address.street}, ${address.city}, ${address.zipcode}`}</p>
  </div>
);

export default UserCard;
