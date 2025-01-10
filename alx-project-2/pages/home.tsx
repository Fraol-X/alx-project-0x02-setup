import React from 'react';
import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (post: Post) => setPosts([...posts, post]);

  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is the second card." />
      <PostModal onAddPost={addPost} />
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
