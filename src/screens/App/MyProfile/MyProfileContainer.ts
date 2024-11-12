import {queryClient} from '@Api/Client';
import {getUserInfo, updateUserProfile} from '@Api/Personal';
import STORAGE_CONST from '@Constants/storage';
import {UpdateUserValidationSchema} from '@Validation/index';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {MyProfileForm} from './type';

export default function useMyProfile() {
  const {data, isSuccess} = getUserInfo();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isDirty},
  } = useForm<MyProfileForm>({
    mode: 'all',
    defaultValues: {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email,
      phoneNumber: data?.phoneNumber ?? '',
    },
    resolver: UpdateUserValidationSchema,
  });

  useEffect(() => {
    if (isSuccess) {
      reset({
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phoneNumber: data?.phoneNumber ?? '',
      });
    }
  }, [isSuccess, data]);

  const {mutate: updateProfile, isPending} = updateUserProfile({
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [STORAGE_CONST.USER_INFO]});
    },
  });

  function onSubmit(data: MyProfileForm) {
    updateProfile(data);
  }

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isDirty,
    isPending,
  };
}
