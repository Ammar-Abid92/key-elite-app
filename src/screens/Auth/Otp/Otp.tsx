import AuthHeader from '@Components/AuthHeader/AuthHeader';
import AppButton from '@Components/Buttons/AppButton';
import Heading from '@Components/TextComponents/Heading';
import TouchableText from '@Components/TextComponents/TouchableText';
import {APP_PRIMARY_COLOR, Colors} from '@Theme/Colors';
import Fonts, {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
import useOtp from './OtpContainer';

export default function Otp() {
  const {
    ref,
    props,
    value,
    CELL_COUNT,
    setValue,
    getCellOnLayoutHandler,
    handleSubmit,
    navigatedFrom,
    timer,
    handleResend,
    isLoading,
    I18n,
    handleBack,
  } = useOtp();

  return (
    <>
      <AuthHeader
        title={I18n.enter_your_code}
        subTitle={I18n.please_enter_code}
      />
      <View style={styles.authMainContainer}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.otpMainContainer}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
              style={[
                styles.cellContainer,
                symbol ? styles.focusCell : undefined,
              ]}>
              <Text style={styles.cell}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />

        <View style={styles.resendContainer}>
          <Heading
            text={!timer ? I18n.didnt_receive_code : I18n.resend_code_in}
            // color={Colors.NAVY_BLUE}
            size={14}
          />
          {!timer ? (
            <TouchableText
              text={I18n.resend_here}
              fontColor={APP_PRIMARY_COLOR}
              onPress={handleResend}
              disabled={isLoading}
              fontSize={14}
            />
          ) : (
            <Heading
              text={' ' + timer + ' sec'}
              color={APP_PRIMARY_COLOR}
              size={14}
              type={FontTypes.Bold}
            />
          )}
        </View>

        <AppButton
          title={I18n.verify}
          onPress={handleSubmit}
          isLoading={isLoading}
          style={styles.buttonStyle1}
          disabled={value.length != CELL_COUNT}
        />
        <AppButton
          title={I18n.back_to_login}
          onPress={handleBack}
          isLoading={isLoading}
          style={styles.buttonStyle2}
          fontColor={APP_PRIMARY_COLOR}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  authMainContainer: {
    paddingHorizontal: Metrics.scale(20),
  },
  buttonStyle1: {
    marginTop: Metrics.verticalScale(40),
  },
  buttonStyle2: {
    marginTop: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
    borderColor: APP_PRIMARY_COLOR,
    borderWidth: 1,
  },
  otpMainContainer: {
    marginTop: Metrics.screenHeight * 0.04,
    marginBottom: Metrics.screenHeight * 0.03,
  },
  focusCell: {
    borderColor: APP_PRIMARY_COLOR,
  },
  cellContainer: {
    backgroundColor: Colors.WHITE,
    width: Metrics.scale(62),
    height: Metrics.scale(60),
    borderRadius: Metrics.scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.TRANSPARENT,
  },
  cell: {
    lineHeight: Metrics.scale(30),
    textAlign: 'center',
    ...Fonts.Regular(25, Colors.GREY),
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
