import AppButton from '@Components/Buttons/AppButton';
import InputField from '@Components/InputField/InputField';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useMyProfile from './MyProfileContainer';

export default function MyProfile() {
  const {control, isDirty, isPending, handleSubmit} = useMyProfile();

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainer}>
      <View>
        <InputField
          control={control}
          name="firstName"
          label="First Name (Legal)"
        />
        <InputField control={control} name="lastName" label="Last Name" />
        <InputField
          control={control}
          name="email"
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          editable={false}
        />
      </View>
      <AppButton
        title="Update Profile"
        disabled={!isDirty}
        onPress={handleSubmit}
        isLoading={isPending}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  mainContainer: {
    padding: Metrics.scale(20),
  },
});
