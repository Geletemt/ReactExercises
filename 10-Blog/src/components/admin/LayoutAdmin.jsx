import axios from 'axios';
import { Field, Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function LayoutAdmin() {
  const [user,setUser] =useState();
  const [error, setError]= useState(false);

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])
 

  const handleLoginUser = (values)=>{
    setError(false)
    axios.get(`http://localhost:3000/admins/?email=${values.email}`)
    .then((response)=>{
      if(response.data.length===1){
        if(response.data[0].password === values.password){
          localStorage.setItem(
            'user',
            JSON.stringify(response.data[0]));
            setUser(response.data[0
            ]);
        }else{
          setError(true);
        }
        
      }else{
        setError(true);
      }
    });
  // localStorage.setItem(
  //   'user',
  //   JSON.stringify({email:'angel@kk.com', name:'angel'}));
  //   setUser({email:'angel@kk.com',name:'angel'});
  };
  const logout = ()=>{
    localStorage.removeItem('user');
    setUser(undefined);
  }

  if (!user){
    return (
      <main className="form-signin w-100 m-auto">
        <Formik
          initialValues={{
            email:'',
            password:'',
          }}
          onSubmit={(values) =>handleLoginUser(values)}
        >
          {() =>(

         <Form> 
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="form-floating">
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email</label>
          </div>
          <div className="form-floating">
            <Field
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label>Password</label>
          </div>

          <div className="form-check text-start my-3">
            <Field
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Recordar en este esquipo</label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" >
            Login
          </button>
          <p className="mt-5 mb-3 text-body-secondary"></p>
          </Form>
          )}
        </Formik>
        {error && <div className='alert alert-danger'>Datos de acceso invalidos</div>}
      </main>
    );
  }


  return (
    <div style={{ display: 'flex' }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: '280px', height: '100vh' }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Blog ADMIN</span>
        </a>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
           
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>{user?.name}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={()=>logout()}>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxHeight: '100vh',
          overflowY: 'auto',
          paddingLeft: '30px 20px',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

