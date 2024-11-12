import AuthHeader from '@Components/AuthHeader/AuthHeader';
import AppButton from '@Components/Buttons/AppButton';
import InputField from '@Components/InputField/InputField';
import Heading from '@Components/TextComponents/Heading';
import {Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import useForgotPassword from './ForgotPasswordContainer';

export default function ForgotPassword() {
  const {control, handleSubmit, isPending, I18n, email} = useForgotPassword();

  return (
    <>
      <AuthHeader
        title={I18n.reset_password}
        subTitle={I18n.please_enter_email}
        showBack
      />

      <View style={styles.authMainContainer}>
        <InputField
          LeftIcon={require('@Asset/icons/Sms.svg')}
          control={control}
          name="email"
          label={I18n.email_address}
          autoCapitalize="none"
          placeholder={I18n.email}
          keyboardType="email-address"
        />
        <AppButton
          title={I18n.send_code}
          onPress={handleSubmit}
          isLoading={isPending}
          style={styles.buttonStyle}
          disabled={!email}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {marginVertical: Metrics.verticalScale(50)},
  authMainContainer: {
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(40),
    flex: 1,
  },
});
