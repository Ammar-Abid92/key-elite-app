// import {SuccessModalContent} from '@Constants/app_constants';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate, resetToRoutes} from '@Service/navigationService';
import {NewPasswordValidationSchema} from '@Validation/index';
import {useRoute} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {showToast} from 'rn-animated-toast';
import {NewPasswordForm, NewPasswordParam} from './type';
import {useAuthStore} from '@Store/authStore';
import {useLanguageContext} from '@Context/languageContext';

export default function useResetPassword() {
  const params = useRoute().params as NewPasswordParam;
  const {setUserAuthentication} = useAuthStore();
  const {I18n} = useLanguageContext();

  // const {mutate: resetPassword, isPending} = ResetPassword({
  //   onSuccess: onSuccess,
  // });

  const {control, handleSubmit} = useForm<NewPasswordForm>({
    mode: 'all',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    // resolver: NewPasswordValidationSchema,
  });

  // function onSuccess() {
  //   showToast(
  //     'Password reset successfully.\nPlease login with your new password.',
  //     'success',
  //   );
  //   resetToRoutes([
  //     {
  //       name: NavigationRoutes.AUTH_STACK.LOGIN,
  //       params: {},
  //     },
  //     {
  //       name: NavigationRoutes.AUTH_STACK.SUCCESS,
  //       params: SuccessModalContent.PASSWORD_CHANGED,
  //     },
  //   ]);
  // }

  function handleResetPassword(data: NewPasswordForm) {
    // resetPassword({...params, password: data.password});
    setUserAuthentication(true, null);
  }

  return {
    control,
    handleSubmit: handleSubmit(handleResetPassword),
    isPending: false,
    I18n,
  };
}
