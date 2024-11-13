import {TokenResponse} from '@Api/ResponseTypes';
import {getTokens} from '@Api/Token';
import {getDeviceInfo} from '@ReusableFunctions/index';
import {useAuthStore} from '@Store/authStore';
import {LoginFormValidationSchema} from '@Validation/index';
import {useForm} from 'react-hook-form';
import {LoginFormType} from './types';
import {useLanguageContext} from '@Context/languageContext';

export default function useLogin() {
  const {setUserAuthentication} = useAuthStore();
  const {I18n} = useLanguageContext();

  const {control, handleSubmit} = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    // resolver: LoginFormValidationSchema,
  });

  const {mutate: loginUser, isPending} = getTokens({
    onSuccess: handleLoginSuccess,
  });

  function handleLoginSuccess(data: TokenResponse) {
    setUserAuthentication(true, data);
  }

  const onSubmit = (data: LoginFormType) => {
    // const deviceInfo = getDeviceInfo();
    const payload = {
      ...data,
      // ...deviceInfo,
    };
    // loginUser(payload);
    setUserAuthentication(true, null); // Remove this line after integrating with API
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isLoading: isPending,
    I18n,
  };
}
