import React from 'react';
import {View, StyleSheet, ScrollView, Linking} from 'react-native';
import Heading from '@Components/TextComponents/Heading';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import {FontTypes} from '@Theme/Fonts';
import {useHousing} from './HousingController';
import {TitleValue} from './HousingComponents';
import {rowAlign} from '@Theme/AppStyles';
import TouchableText from '@Components/TextComponents/TouchableText';

export default function Housing() {
  const {I18n, handleLinkPress, Data} = useHousing();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Heading
          text={I18n.property_info}
          size={20}
          type={FontTypes.Bold}
          style={styles.sectionTitle}
        />

        <View style={styles.line} />

        <TitleValue
          title={I18n.property_name}
          value={Data.propertyInfo.propertyName}
        />
        <TitleValue title={I18n.address} value={Data.propertyInfo.address} />

        <View style={styles.line} />

        <Heading
          text={I18n.property_details}
          size={18}
          type={FontTypes.Bold}
          style={styles.sectionTitle}
        />

        <View style={styles.line} />

        <Heading
          text={Data.propertyDetails.description}
          size={14}
          marginBottom={20}
        />
        <Heading
          text={`Monday to Friday: ${Data.propertyDetails.mondayToFriday}`}
          size={14}
        />
        <Heading
          text={`Saturday: ${Data.propertyDetails.saturday}`}
          size={14}
        />
        <Heading text={`Sunday: ${Data.propertyDetails.sunday}`} size={14} />

        <View style={[rowAlign, styles.mb20]}>
          <Heading
            text={`${I18n.website}: `}
            size={14}
            onPress={handleLinkPress}
          />
          <TouchableText
            text={Data.propertyDetails.website}
            fontSize={14}
            onPress={handleLinkPress}
            fontColor={Colors.BLUE}
          />
        </View>
        <View style={styles.line} />

        <Heading
          text="Roommate Details"
          size={18}
          type={FontTypes.Bold}
          style={styles.sectionTitle}
        />
        <View style={styles.line} />

        <View style={styles.infoRow}>
          <Heading text={I18n.name} size={14} />
          <Heading text="John Doe" size={14} type={FontTypes.Bold} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    marginHorizontal: Metrics.scale(20),
    marginTop: Metrics.scale(10),
  },
  screenTitle: {
    marginVertical: Metrics.scale(10),
    textAlign: 'center',
  },
  card: {
    paddingTop: Metrics.scale(8),
    paddingHorizontal: Metrics.scale(15),
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: Metrics.scale(8),
  },
  sectionTitle: {
    marginBottom: Metrics.scale(10),
    color: Colors.BLACK_TWO,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: Metrics.scale(10),
  },
  linkText: {
    color: Colors.BLUE,
    textDecorationLine: 'underline',
    marginTop: Metrics.scale(10),
  },
  line: {
    height: 1,
    backgroundColor: Colors.BLACK_TWO,
    opacity: 0.2,
    width: '100%',
    alignSelf: 'center',
    marginVertical: Metrics.verticalScale(10),
  },
  mb20: {
    marginBottom: Metrics.verticalScale(20),
  },
});
