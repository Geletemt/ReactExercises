import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'lodash';
import StudentFilter from './StudentFilter';

export default function StudentList() {
  const [students, setStudents] = useState();
  const navigate = useNavigate();

  useEffect(() => {
      
    setStudents(_.orderBy((JSON.parse(localStorage.getItem('students')) ?? []),'surname','asc'));
  }, []);

  

  if (students === undefined) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <StudentFilter/>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-4">Nombre</th>
            <th className="col-4">Apellidos</th>
            <th className="col-1">Edad</th>
            <th className="col-1">Media</th>
            <th className="col-1">Cursos</th>
            <th className="col-1">Fecha</th>
            <th className="col-1">Realizado</th>
            <th className="col-2">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr key={student.id}>
              <th>
                <Link to={`/actualizar-alumno/${student.id}`}>
                  {student.name}
                </Link>
              </th>
              <td>{student.surname}</td>
              <td>{student.age}</td>
              <td>{student.average}</td>
              <td>{student.courses.length}</td>
              <td>{student.date}</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${student.percentage}%` }}
                  >
                    {`${student.percentage}%`}
                  </div>
                </div>
              </td>
              <td>
                <span
                  className="btn btn-sm btn-primary me-1"
                  title="Editar"
                  onClick={() => {
                    {
                      navigate(`/actualizar-alumno/${student.id}`);
                    }
                  }}
                >
                  <i className="ri-pencil-line" />
                </span>
                <span className="btn btn-sm btn-danger" title="Eliminar">
                  <i className="ri-delete-bin-line" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
