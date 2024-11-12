import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {ALPHANUMERIC, PASSWORD_CHECK, PASSWORD_VALIDATOR} from './regex';

export const EMAIL = yup
  .string()
  .email('Please enter a valid email address.')
  .trim()
  .required('Email is required.');

export const FULL_NAME = yup
  .string()
  .trim()
  .required('Full name is required')
  .matches(ALPHANUMERIC, 'FullName must contain only letters and numbers.');

export const NAME = (name: string) =>
  yup
    .string()
    .trim()
    .required(`${name} is required.`)
    .min(2, `${name} must be atleast 2 characters long.`);

export const PASSWORD = yup
  .string()
  .trim()
  .required('Password is required.')
  .min(8, 'Your password should be between 8 and 20 characters')
  .max(20, 'Your password should be between 8 and 20 characters')
  .matches(
    PASSWORD_CHECK,
    'Password must not contain any of the following characters [ ] ; . " \' =',
  )
  .matches(
    PASSWORD_VALIDATOR,
    'Must contain uppercase, lowercase, numbers and special characters.',
  );

export const CONFIRM_PASSWORD = (reference = 'password') => {
  return yup
    .string()
    .trim()
    .required('Please re-enter your password')
    .oneOf([yup.ref(reference)], 'Passwords must match.');
};

export const SignUpFormValidationSchema = yupResolver(
  yup.object({
    firstName: NAME('First name').matches(
      ALPHANUMERIC,
      'First name cannot consist just numbers.',
    ),
    lastName: NAME('Last name'),
    email: EMAIL,
    password: PASSWORD,
    confirmPassword: CONFIRM_PASSWORD(),
  }),
);
