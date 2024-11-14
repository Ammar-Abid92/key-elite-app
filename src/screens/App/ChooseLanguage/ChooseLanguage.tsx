import React, {useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Heading from '@Components/TextComponents/Heading';
import {useLanguageContext} from '@Context/languageContext';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import {flexOne} from '@Theme/AppStyles';
import {APP_PRIMARY_TEXT, Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {isPlatformAndroid} from '@Utility/Utils';
import {en, sp} from '../../../languageConfig/languageConfig';
import AppButton from '@Components/Buttons/AppButton';
import Icon from '@Components/Icon/Icon';
import {useRoute} from '@react-navigation/native';

export default function ChooseLanguageScreen() {
  const {I18n, changeLanguage} = useLanguageContext();
  const route = useRoute();
  const {fromDrawer = false} = route.params ? (route.params as any) : {};

  const handleLanguageSelection = (language: any) => {
    changeLanguage(language === 'English' ? en : sp);
  };

  const handleContinue = () => {
    navigate(NavigationRoutes.APP_STACK.APP_DRAWER);
  };

  return (
    <View style={styles.container}>
      <Heading text={I18n.choose_language} size={24} type={FontTypes.Bold} />
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            I18n.lang === en.lang && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('English')}>
          <Icon
            source={require('@Asset/icons/English.svg')}
            height={20}
            width={30}
            style={styles.mr10}
            fill="transparent"
          />
          <Heading
            text={I18n.english}
            size={16}
            type={FontTypes.Bold}
            style={flexOne}
            marginBottom={3}
          />
          {I18n.lang === en.lang && <View style={styles.radioButtonSelected} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            I18n.lang === sp.lang && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('Spanish')}>
          <Icon
            source={require('@Asset/icons/Spanish.svg')}
            height={20}
            width={30}
            style={styles.mr10}
            fill="transparent"
          />
          <Heading
            text={I18n.spanish}
            size={16}
            type={FontTypes.Bold}
            style={flexOne}
            marginBottom={3}
          />
          {I18n.lang === sp.lang && <View style={styles.radioButtonSelected} />}
        </TouchableOpacity>
      </View>
      {!fromDrawer && (
        <AppButton
          title={I18n.continue}
          onPress={handleContinue}
          style={styles.continueButton}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(isPlatformAndroid ? 85 : 95),
    backgroundColor: Colors.WHITE,
  },
  optionContainer: {
    marginVertical: Metrics.verticalScale(30),
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Metrics.scale(12),
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: Metrics.scale(8),
    marginBottom: Metrics.verticalScale(20),
    backgroundColor: Colors.WHITE,
  },
  selectedOption: {
    borderColor: '#002D62',
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  languageText: {
    flex: 1,
    fontSize: 16,
    color: APP_PRIMARY_TEXT,
    fontWeight: 'bold',
    fontFamily: 'PlusJakartaSans',
  },
  radioButtonSelected: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderWidth: 2,
    borderColor: '#002D62',
    backgroundColor: '#002D62',
  },
  continueButton: {
    width: '100%',
  },
  mr10: {marginRight: Metrics.scale(10)},
});
