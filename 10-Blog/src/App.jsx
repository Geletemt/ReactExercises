
import { Route, Routes } from 'react-router-dom';
import LayoutUser from './components/user/LayoutUser';
import LayoutAdmin from './components/admin/LayoutAdmin';



function App() {
  

  return (
      <Routes>
        <Route path="/" element={<LayoutUser />}>
           <Route index element={<>Hola User</>} />
           {/* <Route path="/category/:categoryID" element={<CategoryScreen/>} />
           <Route path="/post/:postID" element={<PostScreen/>} /> */}

        </Route>   
        <Route path="/admin" element={<LayoutAdmin />}>
           <Route index="/" element={<>Hola Admin</>} />
           {/* <Route path="/post-List" element={<PostListScreen />} />
           <Route path="/post-add" element={<PostAddScreen />} />
           <Route path="/post-update" element={<PostUpdateScreen />} />
           <Route path="/category-list" element={<CategoryListScreen />} />
           <Route path="/category-add" element={<CategoryAddScreen />} />
           <Route path="/category-update" element={<CategoryUpdateScreen />} /> */}

        </Route>   
      </Routes>        
  );
}

export default App
