import { useState } from 'react';

interface PostModalProps {
  onClose: () => void; // Function with no arguments that returns void
  onSubmit: (post: { title: string; content: string }) => void; // Function that accepts an object and returns void
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default PostModal;
