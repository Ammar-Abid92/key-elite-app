import IconButton from '@Components/Buttons/IconButton';
import Icon from '@Components/Icon/Icon';
import Heading from '@Components/TextComponents/Heading';
import {ONBOARDING_DATA} from '@Constants/app_constants';
import {columnCenter, rowSpaceBetween} from '@Theme/AppStyles';
import {Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import useOnboarding from './OnboardingContainer';

export default function Onboarding() {
  const {handleForward, handleSkip, currentIndex} = useOnboarding();

  return (
    <View style={styles.onboardMainContainer}>
      <View style={[styles.wt100, columnCenter]}>
        <Image
          style={{
            height: Metrics.scale(320),
            width: Metrics.scale(320),
            marginBottom: Metrics.scale(20),
          }}
          source={ONBOARDING_DATA[currentIndex].image}
        />
        <Icon
          height={6}
          width={43}
          source={ONBOARDING_DATA[currentIndex].icon}
        />
      </View>
      <View>
        <Heading
          text={ONBOARDING_DATA[currentIndex].title}
          size={32}
          type={FontTypes.Bold}
          color={Colors.BROWN}
        />
        <Heading
          text={ONBOARDING_DATA[currentIndex].body}
          size={18}
          type={FontTypes.Regular}
          color={Colors.BROWN}
          marginTop={15}
        />
        <View style={[rowSpaceBetween, styles.mt15]}>
          <Heading
            text="Skip"
            size={18}
            color={Colors.RED}
            onPress={() => handleSkip()}
          />
          <IconButton
            source={require('@Asset/icons/ArrowRight.svg')}
            onPress={handleForward}
            style={styles.buttonStyle}
            disabled={false}
            iconFill="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wt100: {width: '100%'},
  mt15: {marginTop: Metrics.verticalScale(15)},
  buttonStyle: {
    width: Metrics.scale(45),
    height: Metrics.scale(45),
    borderRadius: Metrics.scale(50),
    backgroundColor: Colors.RED,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardMainContainer: {
    paddingHorizontal: Metrics.scale(20),
    flex: 1,
    justifyContent: 'space-around',
  },
});
