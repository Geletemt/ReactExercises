import { Link, Outlet } from 'react-router-dom';
import postList from './constantes/postList';

export default function DefaultLayout() {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/new-post"> Nuevo post</Link>
          </li>
         
          {postList.map((post, i) => (
            <li key={i}>
              <Link to={`/post/${i}/`}>{post.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
