import { useState } from 'react';

interface Post {
  title: string;
  content: string;
}

interface PostModalProps {
  onAddPost: (post: Post) => void;
}

export default function PostModal({ onAddPost }: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddPost({ title, content });
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ color: 'black' }} 
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ color: 'black' }} 
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
