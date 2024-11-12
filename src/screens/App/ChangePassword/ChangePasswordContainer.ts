import {useForm} from 'react-hook-form';
import {ChangePasswordForm} from './type';
import {
  ChangePasswordValidationSchema,
  NewPasswordValidationSchema,
} from '@Validation/index';
import {changePassword} from '@Api/Personal';
import {showToast} from 'rn-animated-toast';
import {pop} from '@Service/navigationService';

export default function useChangePassword() {
  const {mutate: ChangePassword, isPending} = changePassword({
    onSuccess: () => {
      showToast('Password changed successfully', 'success');
      pop();
    },
  });

  const {control, handleSubmit} = useForm<ChangePasswordForm>({
    mode: 'all',
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    resolver: ChangePasswordValidationSchema,
  });

  function onSubmit({confirmPassword, ...rest}: ChangePasswordForm) {
    // TODO : add log out of all accounts modal
    ChangePassword({...rest, logOutOfAllAccounts: true});
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isPending,
  };
}
