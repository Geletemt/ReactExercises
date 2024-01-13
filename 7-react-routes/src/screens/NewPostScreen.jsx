import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function NewPostScreen() {
  const navigate = useNavigate();

  const handleNewPost =(values) =>{
    console.log('Resultado del formulario:',values);
    navigate('/');
  }

  return (
    <Formik
      initialValues={{
        name: '',
        content: '',
      }}
      onSubmit={(values) =>handleNewPost(values)}
    >
      {() => (
        <Form>
          <Field name="name" />
          <Field as="textarea" name="content" />
          <button type='submit'>Enviar</button>
        </Form>
      )}
    </Formik>
  );
}
