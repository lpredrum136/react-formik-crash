import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(10, 'Must be 10 chars or less')
    .required('Required'),
  lastName: Yup.string()
    .max(10, 'Must be 10 chars or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
})

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: ''
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm
