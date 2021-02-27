import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import CheckboxInput from './CheckboxInput'
import SelectInput from './SelectInput'
import TextareaInput from './TextareaInput'
import TextInput from './TextInput'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(10, 'Must be 10 chars or less')
    .required('Required'),
  lastName: Yup.string()
    .max(10, 'Must be 10 chars or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  acceptedTerms: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the T&C'),
  jobType: Yup.string()
    .oneOf(['designer', 'development', 'product', 'other'], 'Invalid Job Type')
    .required('Required')
})

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        acceptedTerms: false, // for checkbox
        message: '',
        jobType: ''
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
    >
      <Form>
        {/* CACH 1
        <label htmlFor="email">Email Address</label>
        <input
            type="email"
            id="email"
            {...getFieldProps('email')} // auto returns name, value, onChange, onBlur
          />
          {touched.email && errors.email ? <div>{errors.email}</div> : null} */}

        {/* CACH 2
        <Field name="email" type="email" className="my-class-name" />
        <ErrorMessage name="email" />

        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="message">Message</label>
        <Field name="message" as="textarea" />

        <Field name="color" as="select">
          <option value="red">Red</option>
          <option value="green">Green</option>
        </Field> */}

        <TextInput
          label="First Name"
          name="firstName"
          type="text"
          placeholder="Enter first name"
        />
        <TextInput
          label="Last Name"
          name="lastName"
          type="text"
          placeholder="Enter last name"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter email"
        />

        <SelectInput label="Job Type" name="jobType">
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
          <option value="product">Product Manager</option>
          <option value="other">Other</option>
        </SelectInput>

        <TextareaInput name="message" label="Send me a message" />

        <CheckboxInput name="acceptedTerms">I accept</CheckboxInput>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

export default SignupForm
