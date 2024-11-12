import AppButton from '@Components/Buttons/AppButton';
import InputField from '@Components/InputField/InputField';
import Oauth from '@Components/Oauth/Oauth';
import Heading from '@Components/TextComponents/Heading';
import TouchableText from '@Components/TextComponents/TouchableText';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {row, rowCenter} from '@Theme/AppStyles';
import {Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import useSignUp from './SignUpContainer';

export default function SignUp() {
  const {
    control,
    handleSubmit,
    isLoading,
    handlePrivacyPolicyPress,
    handleTermsPress,
    setIsPrivacyPolicyChecked,
    isPrivacyPolicyChecked,
  } = useSignUp();

  return (
    <ScrollView
      style={styles.loginContainer}
      showsVerticalScrollIndicator={false}>
      <Heading
        text="Sign Up"
        size={32}
        type={FontTypes.Bold}
        color={Colors.RED}
      />
      <Heading
        text="Welcome onboard,"
        size={18}
        type={FontTypes.Regular}
        color={Colors.BROWN}
        marginTop={15}
      />
      <Heading
        text="Start exploring Saudi with “Folo App”"
        size={18}
        type={FontTypes.Regular}
        color={Colors.BROWN}
        marginBottom={20}
      />
      <InputField
        LeftIcon={require('@Asset/icons/UserSquare.svg')}
        control={control}
        name="username"
        label=""
        autoCapitalize="none"
        placeholder="Username"
      />
      <InputField
        LeftIcon={require('@Asset/icons/UserEdit.svg')}
        control={control}
        name="fullName"
        label=""
        autoCapitalize="none"
        placeholder="FullName"
      />
      <InputField
        LeftIcon={require('@Asset/icons/Sms.svg')}
        control={control}
        name="email"
        label=""
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email/Phone Number"
      />

      <InputField
        LeftIcon={require('@Asset/icons/Lock.svg')}
        control={control}
        isPassword
        name="password"
        label=""
        autoCapitalize="none"
        placeholder="Password"
      />
      <InputField
        LeftIcon={require('@Asset/icons/Lock.svg')}
        control={control}
        isPassword
        name="confirmPassword"
        label=""
        autoCapitalize="none"
        placeholder="Confirm Password"
      />

      <View style={[row, styles.mv10]}>
        <CheckBox
          disabled={false}
          boxType="square"
          style={[styles.mr5, styles.checkboxStyle]}
          value={isPrivacyPolicyChecked}
          tintColor={Colors.RED}
          onCheckColor={Colors.RED}
          onTintColor={Colors.RED}
          tintColors={{true: Colors.RED, false: Colors.RED}}
          onValueChange={setIsPrivacyPolicyChecked}
        />
        <View style={styles.displayFlex}>
          <Heading
            size={14}
            color={Colors.BROWN}
            text="I hereby confirm that I have read the FOLO’s "
            style={styles.subtitleTextStyle}
          />
          <TouchableText
            onPress={handleTermsPress}
            text="Terms of Services"
            textStyle={styles.subtitleTextStyle}
            fontColor={Colors.SKY_BLUE}
            fontType={FontTypes.Bold}
            fontSize={14}
          />
          <Heading
            size={14}
            color={Colors.BROWN}
            text=" and "
            style={styles.subtitleTextStyle}
          />
          <TouchableText
            onPress={handlePrivacyPolicyPress}
            text="Privacy Policy"
            textStyle={styles.subtitleTextStyle}
            fontColor={Colors.SKY_BLUE}
            fontType={FontTypes.Bold}
            fontSize={14}
          />
        </View>
      </View>

      <AppButton
        title="Sign Up"
        onPress={handleSubmit}
        isLoading={isLoading}
        style={styles.buttonStyle}
        fontColor={Colors.SAND}
      />

      <Oauth />

      <View style={[rowCenter, {marginTop: Metrics.verticalScale(15)}]}>
        <Heading
          text="Already have an account? "
          size={16}
          type={FontTypes.Regular}
          color={Colors.BROWN}
        />
        <TouchableText
          onPress={() => {
            navigate(NavigationRoutes.AUTH_STACK.LOGIN);
          }}
          text="Login"
          fontSize={16}
          fontColor={Colors.SKY_BLUE}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(10),
    flex: 1,
  },
  br50: {
    borderRadius: Metrics.scale(50),
  },
  buttonStyle: {
    width: '100%',
  },
  continueAsGuest: {
    fontSize: Metrics.scale(12),
  },
  width100: {width: '100%'},
  mr5: {marginRight: Metrics.scale(5)},
  ml15: {marginLeft: Metrics.scale(15)},
  mv10: {marginVertical: Metrics.verticalScale(15)},
  authMainContainer: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Metrics.scale(20),
  },
  displayFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '87%',
  },
  subtitleTextStyle: {
    letterSpacing: Metrics.scale(-0.5),
    lineHeight: Metrics.scale(22),
  },
  checkboxStyle: {
    width: Metrics.scale(50),
    height: Metrics.scale(50),
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
});
