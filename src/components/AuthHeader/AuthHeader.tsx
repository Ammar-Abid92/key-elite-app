import IconButton from '@Components/Buttons/IconButton';
import Heading from '@Components/TextComponents/Heading';
import {goBack} from '@Service/navigationService';
import {APP_PRIMARY_TEXT, Colors} from '@Theme/Colors';
import {FontFamily, FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {isPlatformAndroid} from '@Utility/Utils';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const AuthHeader = ({
  showBack = false,
  title,
  subTitle,
}: {
  showBack?: boolean;
  title?: string;
  subTitle?: string;
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.LIGHT_GREY,
        paddingTop: Metrics.verticalScale(isPlatformAndroid ? 85 : 95),
        paddingHorizontal: Metrics.scale(20),
      }}>
      {showBack && (
        <IconButton
          source={require('@Asset/icons/ArrowBack.svg')}
          onPress={() => goBack()}
          imageHeight={13}
          imageWidth={8}
          style={{
            marginBottom: Metrics.verticalScale(20),
          }}
        />
      )}
      <Heading
        text={title}
        size={24}
        type={FontTypes.Bold}
        color={APP_PRIMARY_TEXT}
        marginBottom={!subTitle ? 20 : 0}
      />
      {subTitle && (
        <Heading
          text={subTitle}
          size={14}
          type={FontTypes.Light}
          color={Colors.BLACK_TWO}
          marginBottom={30}
          marginTop={5}
          fontFamily={FontFamily.Poppins}
        />
      )}
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({});
