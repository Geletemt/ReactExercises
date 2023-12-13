import { Link, Route, Routes } from 'react-router-dom';
import StudentAdd from './components/StudentAdd';
import StudentList from './components/StudentList';
import StudentUpdate from './components/StudentUpdate';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ColegioApp
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Listado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nuevo-alumno">
                  Nuevo Alumno
                </Link>
              </li>
            </ul>
            <span className="">
              <a className="nav-link" href="#">
                Mi cuenta
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/nuevo-alumno" element={<StudentAdd />} />
          <Route path="/actualizar-alumno/:studentId" element={<StudentUpdate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
