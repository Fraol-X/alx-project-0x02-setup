import React, { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';

// Define the Post interface
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostsPage = () => {
  // Use the Post type for the posts state
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data)); // Ensure the API response matches the Post type
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
