import Heading from '@Components/TextComponents/Heading';
import { useLanguageContext } from '@Context/languageContext';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import { navigate } from '@Service/navigationService';
import { flexOne } from '@Theme/AppStyles';
import { APP_PRIMARY_TEXT, Colors } from '@Theme/Colors';
import { FontTypes } from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import { isPlatformAndroid } from '@Utility/Utils';
import {en, sp} from '../../../languageConfig/languageConfig';

import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppButton from '@Components/Buttons/AppButton';

export default function ChooseLanguageScreen() {
  const {I18n, changeLanguage} = useLanguageContext();

  const handleLanguageSelection = (language: any) => {
    changeLanguage(language === 'English' ? en : sp);
  };

  const handleContinue = () => {
    navigate(NavigationRoutes.APP_STACK.APP_DRAWER);
  };

  return (
    <View style={styles.container}>
      <Heading text="Choose Language" size={24} type={FontTypes.Bold} />
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            I18n === en && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('English')}>
          <Image
            source={{uri: 'https://flagcdn.com/w320/us.png'}} // Replace with your local asset if necessary
            style={styles.flag}
          />
          <Heading
            text="English"
            size={16}
            type={FontTypes.Bold}
            style={flexOne}
            marginBottom={2}
          />
          { I18n === en && (
            <View style={styles.radioButtonSelected} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            I18n === sp && styles.selectedOption,
          ]}
          onPress={() => handleLanguageSelection('Spanish')}>
          <Image
            source={{uri: 'https://flagcdn.com/w320/es.png'}}
            style={styles.flag}
          />
          <Heading
            text="Spanish"
            size={16}
            type={FontTypes.Bold}
            style={flexOne}
            marginBottom={2}
          />
          { I18n === sp && (
            <View style={styles.radioButtonSelected} />
          )}
        </TouchableOpacity>
      </View>
      <AppButton
        title="Continue"
        onPress={handleContinue}
        style={styles.continueButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Metrics.scale(20),
    paddingTop: Metrics.verticalScale(isPlatformAndroid ? 85 : 95),
    backgroundColor: Colors.LIGHT_GREY,
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

});
