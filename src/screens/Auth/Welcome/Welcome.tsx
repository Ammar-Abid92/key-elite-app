import AppButton from '@Components/Buttons/AppButton';
import Icon from '@Components/Icon/Icon';
import TouchableText from '@Components/TextComponents/TouchableText';
import { Colors } from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import useWelcome from './WelcomeContainer';
import NavigationRoutes from '@Navigator/NavigationRoutes';

export default function Welcome() {
  const { handleNavigate, handleGuest } = useWelcome();

  return (
    <View style={styles.authMainContainer}>
      <Icon
        height={70}
        width={200}
        source={require('@Asset/icons/AppLogo.svg')}
        style={styles.logo}
      />
      
      <AppButton
        title="Login"
        onPress={() => handleNavigate(NavigationRoutes.AUTH_STACK.LOGIN)}
        style={[styles.buttonStyle, styles.loginButton]}
      />
      <AppButton
        title="Sign Up"
        onPress={() => handleNavigate(NavigationRoutes.AUTH_STACK.SIGN_UP)}
        style={[styles.buttonStyle, styles.signUpButton]}
        fontColor={Colors.GOLDEN}
      />
      <TouchableText
        onPress={handleGuest}
        text="Continue as a Guest"
        style={styles.continueAsGuest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  authMainContainer: {
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    marginBottom: Metrics.verticalScale(100), 
  },
  buttonStyle: {
    width: '100%',
    borderRadius: Metrics.scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.verticalScale(15),
  },
  loginButton: {
    marginTop: Metrics.verticalScale(80),
    backgroundColor: Colors.RED, 
  },
  signUpButton: {
    backgroundColor: Colors.APP_BACKGROUND,
    borderColor: Colors.GOLDEN,
    borderWidth: 1,
  },
  continueAsGuest: {
    fontSize: Metrics.scale(14),
    marginTop: Metrics.verticalScale(10),
  },
});
