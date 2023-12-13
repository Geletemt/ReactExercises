import { Field, Formik } from 'formik';


export default function NewPostScreen() {
  return (
    <Formik
      initialValues={{
        name: '',
        content: '',
      }}
    >
      onSubmit={(values) => console.log(values)}
      {() => (
        <form>
          <Field name="name" />
          <Field as="textarea" name="content" />
        </form>
      )}
    </Formik>
  );
}
