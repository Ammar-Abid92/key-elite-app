import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React, {useCallback, useState} from 'react';
import {useForm} from 'react-hook-form';
import {openPicker} from 'react-native-image-crop-picker';
import {MyProfileForm} from './type';
import {showToast} from 'rn-animated-toast';
import {goBack} from '@Service/navigationService';
import {useLanguageContext} from '@Context/languageContext';

export default function useMyProfile() {
  const [image, setImage] = useState('');
  const {I18n} = useLanguageContext();

  // const {data, isSuccess, refetch} = getUserInfo();
  const data = {
    email: 'johndoe@gmail.com',
    username: 'John Doe',
  };

  const {
    control,
    handleSubmit,
    formState: {isDirty, errors, dirtyFields},
    watch,
    reset,
  } = useForm<MyProfileForm>({
    mode: 'all',
    defaultValues: {
      email: 'johndoe@gmail.com',
      username: 'John Doe',
    },
    // resolver: UpdateUserValidationSchema,
  });

  function onSubmit(data: MyProfileForm) {
    const payload = {
      fullName: data.fullName.trim(),
      username: data.username.trim(),
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    console.log(payload);
    showToast('Profile Updated Successfully', 'success');
    goBack();
  }

  const pickFromGallery = useCallback(async () => {
    try {
      const data = await openPicker({
        mediaType: 'photo',
        maxFiles: 1,
        cropping: true,
      });
      setImage(data.path);
    } catch (error) {
      console.warn('error', error);
    }
  }, []);

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    isDirty,
    isPending: false,
    image,
    setImage,
    handlePressIcon: pickFromGallery,
    initials: `${data.username.charAt(0)}${data.username.charAt(1)}`,
    I18n,
  };
}
