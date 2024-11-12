import {TokenResponse} from '@Api/ResponseTypes';
import {getTokens} from '@Api/Token';
import {getDeviceInfo} from '@ReusableFunctions/index';
import {useAuthStore} from '@Store/authStore';
import {LoginFormValidationSchema} from '@Validation/index';
import {useForm} from 'react-hook-form';
import { SignUpForm } from './types';
import { useState } from 'react';
import { SignUpFormValidationSchema } from '@Validation/commonValidators';
import { showToast } from 'rn-animated-toast';
import { navigate, resetToRoutes } from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';

export default function useSignUp() {
  const {setUserAuthentication} = useAuthStore();

  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false);
  const {control, handleSubmit, getValues} = useForm<SignUpForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: SignUpFormValidationSchema,
  });

  // const {mutate: register, isPending} = Register({
  //   onSuccess() {
  //     showToast(
  //       'Account Created\nPlease check your inbox to verify your email',
  //       'success',
  //     );
  //     resetToRoutes([
  //       {name: NavigationRoutes.AUTH_STACK.LOGIN, params: {}},
  //       {
  //         name: NavigationRoutes.AUTH_STACK.OTP,
  //         params: {
  //           email: getValues().email,
  //         },
  //       },
  //     ]);
  //   },
  // });

  const onSubmit = ({confirmPassword, ...data}: SignUpForm) => {
    // register(data);
   navigate(NavigationRoutes.AUTH_STACK.OTP)
  };

  const handlePrivacyPolicyPress = () => {
    // navigate(NavigationRoutes.COMMON_STACK.PRIVACY_POLICY, {
    //   type: 'PrivacyPolicy',
    // });
  };

  const handleTermsPress = () => {
    // navigate(NavigationRoutes.COMMON_STACK.TERMS_OF_USE, {type: 'Terms'});
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    handlePrivacyPolicyPress,
    handleTermsPress,
    setIsPrivacyPolicyChecked,
    isPrivacyPolicyChecked,
    isLoading: false,
  };
}
