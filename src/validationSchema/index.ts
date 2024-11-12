import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  CONFIRM_PASSWORD,
  EMAIL,
  FULL_NAME,
  NAME,
  PASSWORD,
} from './commonValidators';
import {ALPHANUMERIC, PASSWORD_VALIDATOR} from './regex';

const LoginFormValidationSchema = yupResolver(
  yup.object({
    email: EMAIL,
    password: yup.string().trim().required('Password is required.'),
    // .min(6, 'Password must be longer than or equal to 6 characters'),
  }),
);

const SignUpFormValidationSchema = yupResolver(
  yup.object({
    firstName: NAME('First name').matches(
      ALPHANUMERIC,
      'First name cannot consist just numbers.',
    ),
    lastName: NAME('Last name'),
    email: EMAIL,
    phoneNumber: yup.string().trim().required('Phone number is required.'),
    password: PASSWORD,
    confirmPassword: CONFIRM_PASSWORD(),
  }),
);

const ContactUsValidationSchema = yupResolver(
  yup.object({
    Name: FULL_NAME,
    Email: EMAIL,
    Phone: yup.string().trim().required('Phone number is required.'),
    Message: yup.string().trim().required('Message is required.'),
  }),
);

const ForgetPasswordValidationSchema = yupResolver(
  yup.object({
    email: EMAIL,
  }),
);

const NewPasswordValidationSchema = yupResolver(
  yup.object({
    password: PASSWORD,
    confirmPassword: CONFIRM_PASSWORD(),
  }),
);

const ChangePasswordValidationSchema = yupResolver(
  yup.object().shape({
    oldPassword: yup.string().trim().required('Old password is required.'),
    newPassword: yup
      .string()
      .trim()
      .required('Password is required.')
      .min(8, 'Must be 8 characters long.')
      .matches(
        PASSWORD_VALIDATOR,
        'Password must contain numbers and alphabets',
      )
      .notOneOf(
        [yup.ref('oldPassword'), null],
        'Password should be different.',
      ),
    confirmPassword: yup
      .string()
      .trim()
      .required('Please re-enter your password')
      .oneOf([yup.ref('newPassword')], "Password doesn't match."),
  }),
);

const UpdateUserValidationSchema = yupResolver(
  yup.object({
    firstName: NAME('First name').matches(
      ALPHANUMERIC,
      'First name cannot consist just numbers.',
    ),
    lastName: NAME('Last name'),
    email: yup.string().email().trim().required('Email address is required.'),
    phoneNumber: yup.string().trim().required('Phone number is required.'),
  }),
);

export {
  LoginFormValidationSchema,
  SignUpFormValidationSchema,
  ContactUsValidationSchema,
  ForgetPasswordValidationSchema,
  NewPasswordValidationSchema,
  ChangePasswordValidationSchema,
  UpdateUserValidationSchema,
};
