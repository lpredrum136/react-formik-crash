import { useFormik } from 'formik';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email Address</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignupForm;
