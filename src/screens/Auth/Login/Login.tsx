import AuthHeader from '@Components/AuthHeader/AuthHeader';
import AppButton from '@Components/Buttons/AppButton';
import InputField from '@Components/InputField/InputField';
import Heading from '@Components/TextComponents/Heading';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import useLogin from './LoginContainer';

export default function Login() {
  const {control, handleSubmit, isLoading, I18n} = useLogin();

  return (
    <>
      <AuthHeader title={I18n.sign_in} subTitle={I18n.enter_details_below} />
      <View style={styles.loginContainer}>
        <InputField
          LeftIcon={require('@Asset/icons/Sms.svg')}
          control={control}
          name="email"
          label={I18n.email_address}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder={I18n.email}
        />
        <InputField
          LeftIcon={require('@Asset/icons/Lock.svg')}
          control={control}
          isPassword
          name="password"
          label={I18n.password}
          autoCapitalize="none"
          placeholder={I18n.password}
        />
        <Heading
          onPress={() => {
            navigate(NavigationRoutes.AUTH_STACK.FORGOT_PASSWORD);
          }}
          text={I18n.forgot_password}
          style={styles.continueAsGuest}
          alignment="right"
          color={Colors.NAVY_BLUE}
          marginBottom={20}
        />
        <AppButton
          title={I18n.sign_in}
          onPress={handleSubmit}
          isLoading={isLoading}
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(50),
    flex: 1,
  },
  buttonStyle: {
    width: '100%',
  },
  continueAsGuest: {
    fontSize: Metrics.scale(12),
  },
});
