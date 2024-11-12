import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputField from '@Components/InputField/InputField';
import AppButton from '@Components/Buttons/AppButton';
import useChangePassword from './ChangePasswordContainer';

export default function ChangePassword() {
  const {control, handleSubmit, isPending} = useChangePassword();

  return (
    <View style={styles.mainContainer}>
      <View>
        <InputField
          control={control}
          name="oldPassword"
          label="Old Password"
          isPassword
        />
        <InputField
          control={control}
          name="newPassword"
          label="New Password"
          isPassword
        />
        <InputField
          control={control}
          name="confirmPassword"
          label="Confirm New Password"
          isPassword
        />
      </View>
      <AppButton
        title="Change Password"
        onPress={handleSubmit}
        isLoading={isPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
});
