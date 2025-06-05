import { useEffect, useState } from 'react';
import { PostCard } from '../PostCard/PostCard';
import './PostList.css';

type Post = {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
};

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://studapi.teachmeskills.by/blog/posts/')
      .then(res => res.json())
      .then(data => setPosts(data.results)) 
      .catch(err => console.error('Ошибка загрузки постов:', err));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
