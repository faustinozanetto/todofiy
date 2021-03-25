import React from 'react';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

interface LoginFormProps {}

interface ILoginForm {
  username: string;
  email: string;
  password: string;
}

/**
 * Sign in schema input validation with Yup.
 */
const signInSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!')
    .min(3, 'Username has to be longer than 3 characters!')
    .max(25, 'Username has to be shorter than 25 characters!'),
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(3, 'Password has to be longer than 3 characters!')
    .max(25, 'Password has to be shorter than 25 characters!'),
});

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const initialValues: ILoginForm = {
    username: '',
    email: '',
    password: '',
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values: ILoginForm, actions) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<ILoginForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <form>
              <h1>Sign Up</h1>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
