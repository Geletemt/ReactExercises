import { Route, Routes } from 'react-router-dom';
import './index.css';
import DefaultLayout from './DefaultLayout';

import PostScreen from './screens/PostScreen';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<div>Home de nuevo</div>} />
          <Route path="/new-post" element={<NewPostScreen />} />
          <Route path="/post/:postId/" element={<PostScreen />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}
