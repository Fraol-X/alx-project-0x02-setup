import React from 'react';
import { PostProps } from '../../interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{content}</p>
      <small>User ID: {userId}</small>
    </div>
  );
};

export default PostCard;
