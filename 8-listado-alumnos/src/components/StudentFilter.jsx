export default function StudentFilter() {
    
  return (
    <>
      <div className="d-inline-flex">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ordenar por...
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Apellidos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Curso
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Porcentaje
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Media
              </a>
            </li>
          </ul>
        </div>
        <i
          className="ri-sort-alphabet-desc"
          style={{ fontSize: '32px', color: 'red' }}
        />
        <i
          className="ri-sort-alphabet-asc"
          style={{ fontSize: '32px', color: 'red' }}
        />
      </div>
    </>
  );
}
