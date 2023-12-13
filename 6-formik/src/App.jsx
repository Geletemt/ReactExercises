import { Field, Form, Formik } from 'formik'
import { useState } from 'react';
import * as Yup from 'yup';



function App() {
  const [userList, setUserList] = useState([]);
  const [sexOption] = useState(['Hombre', 'Mujer', 'No Responde']);

  //el resetForm lo metemos entre corchetes porque en el onSubmit de la linea 30 lo hemos puesto de manera resumida
  const handleAddUser = (values, { resetForm }) => {
    let tempUserList = [...userList];
    tempUserList.push(values);
    setUserList(tempUserList);
    resetForm();
  }

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          age: '',
          sex: '2'

        }}

        validationSchema={Yup.object({
          name: Yup.string().required('Campo obligatorio').min(3,'Minimo 3 caracteres').max(10,'Max 10 caracteres'),
          surname: Yup.string().required('Campo obligatorio').min(3, 'Minimo 3 caracteres').max(10, 'Max 10 caracteres'),
          age: Yup.number().required('Campo obligatorio').min(18,'Debe ser mayor de edad').max(99,'No queremos momias'),
          sex: Yup.string().required('Campo obligatorio'),
        })}
        validateOnBlur={false}
        validateOnChange={false}
        //onSubmit={(values, {resetForm}) => handleAddUser(values, resetForm)}
        //Tambien lo podemos resumir de esta manera
        onSubmit={handleAddUser}
      >
        {({ errors }) => (
          <Form>
            {errors && (
            <>
              <div>{errors.name && <span>Nombre: {errors.name}</span>}</div>
              <div>{errors.surname && <span>Apellidos: {errors.surname}</span>}</div>
              <div>{errors.age && <span>Edad: {errors.age}</span>}</div>
              <div>{errors.name && <span>Sexo: {errors.name}</span>}</div>
            </>


            )}
            <Field type="text" name="name" placeholder="Nombre" style={errors.name && { borderColor: 'red' }} />
            <Field type="text" name="surname" placeholder="Apellidos" style={errors.surname && { borderColor: 'red' }} />
            <Field type="number" name="age" placeholder="Edad" style={errors.age && { borderColor: 'red' }} />
            <Field as="select" name="sex" placeholder="Sexo" >
              <option value="0">Hombre</option>
              <option value="1">Mujer</option>
              <option value="2">Prefiero no decirlo</option>
            </Field>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>

      <table style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Edad</th>
            <th>Sexo</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.age}</td>
              <td>{sexOption[user.sex]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App
