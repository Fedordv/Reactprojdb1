import './PostCard.css';
import { FaRegHeart, FaRegComment, FaBookmark, FaEllipsisH } from 'react-icons/fa';
import { useState } from 'react';

type Post = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export const PostCard = ({ title, text, image, date }: Post) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post-card">
      {image && <img src={image} alt="Post" className="post-image" />}
      <div className="post-content">
        <p className="post-date">{date}</p>
        <h3 className="post-title">{title}</h3>
        <p className="post-text">{text}</p>

        <div className="post-actions">
          <button onClick={() => setLikes(likes + 1)}>
            <FaRegHeart /> {likes}
          </button>
          <button>
            <FaRegComment /> 0
          </button>
          <button>
            <FaBookmark />
          </button>
          <button>
            <FaEllipsisH />
          </button>
        </div>
      </div>
    </div>
  );
};
