import { useNavigate, useParams } from 'react-router-dom';
import postList from '../constantes/postList';
import { useEffect } from 'react';

export default function PostScreen() {
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!postList[postId]) {
      navigate('/404');
    }
  }, []);

  if (postList[postId]) {
    return (
      <div>
        <h1>{postList[postId].name}</h1>
        <p>{postList[postId].content}</p>
      </div>
    );
  }
}
