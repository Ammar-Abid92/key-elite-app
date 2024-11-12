import {OtpRoutes} from '@Constants/enums';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {ForgetPasswordValidationSchema} from '@Validation/index';
import {useForm} from 'react-hook-form';
import {showToast} from 'rn-animated-toast';
import {ForgotPassForm} from './type';
import {useLanguageContext} from '@Context/languageContext';

export default function useForgotPassword() {
  const {control, handleSubmit, getValues, watch} = useForm<ForgotPassForm>({
    defaultValues: {
      email: '',
    },
    resolver: ForgetPasswordValidationSchema,
  });

  const {I18n} = useLanguageContext();

  // const {mutate: forgotPw, isPending} = ForgotPassword({
  //   onSuccess: () => {
  //     showToast(
  //       'Email Sent\nOTP to reset your password have been sent to your email.',
  //       'success',
  //     );
  //     navigate(NavigationRoutes.AUTH_STACK.OTP, {
  //       navigatedFrom: OtpRoutes.FORGOT_PASSWORD,
  //       email: getValues().email,
  //     });
  //   },
  // });

  const onSubmit = (data: ForgotPassForm) => {
    // forgotPw(data);
    navigate(NavigationRoutes.AUTH_STACK.OTP, {
      navigatedFrom: OtpRoutes.FORGOT_PASSWORD,
      email: getValues().email,
    });
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending: false,
    I18n,
    email: watch('email'),
  };
}
