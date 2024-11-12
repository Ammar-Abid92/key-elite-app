import AuthHeader from '@Components/AuthHeader/AuthHeader';
import AppButton from '@Components/Buttons/AppButton';
import InputField from '@Components/InputField/InputField';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useResetPassword from './ResetPasswordContainer';

export default function ResetPassword() {
  const {control, handleSubmit, isPending, I18n} = useResetPassword();

  const requirements = [
    I18n.one_uppercase,
    I18n.one_lowercase,
    I18n.one_special_character,
    I18n.one_numeric_digit,
    I18n.twelve_characters,
  ];

  return (
    <>
      <AuthHeader title={I18n.create_new_password} />
      <ScrollView
        style={styles.authMainContainer}
        showsVerticalScrollIndicator={false}>
        <InputField
          LeftIcon={require('@Asset/icons/Lock.svg')}
          control={control}
          isPassword
          name="password"
          label={I18n.enter_your_new_password}
          autoCapitalize="none"
          placeholder={I18n.password}
        />
        <InputField
          LeftIcon={require('@Asset/icons/Lock.svg')}
          control={control}
          isPassword
          name="confirmPassword"
          label={I18n.confirm_new_password}
          autoCapitalize="none"
          placeholder={I18n.confirm_password}
          wrapperStyle={styles.mt20}
        />

        <View style={styles.container}>
          {requirements.map((requirement, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>{requirement}</Text>
            </View>
          ))}
        </View>

        <AppButton
          title={I18n.create_new_password}
          onPress={handleSubmit}
          isLoading={isPending}
          style={styles.buttonStyle}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  authMainContainer: {
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(30),
  },
  buttonStyle: {
    marginVertical: Metrics.verticalScale(20),
  },
  br50: {
    borderRadius: Metrics.scale(50),
  },
  mt20: {
    marginTop: Metrics.verticalScale(20),
  },
  container: {
    marginTop: Metrics.verticalScale(10),
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#003366',
    marginRight: 8,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#003366',
  },
});
