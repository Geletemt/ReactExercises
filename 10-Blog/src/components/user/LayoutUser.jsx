import { Outlet } from 'react-router-dom';


export default function LayoutUser() {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <span className="fs-4">Blog</span>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Categoria 1
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Categoria 2
                </a>
              </li>
            </ul>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
