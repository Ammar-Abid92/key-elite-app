import Icon from '@Components/Icon/Icon';
import Heading from '@Components/TextComponents/Heading';
import {rowAlign, rowCenter, rowSpaceBetween} from '@Theme/AppStyles';
import {APP_PRIMARY_TEXT, Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export const Dashboard = ({
  title,
  sport,
  organization,
  I18n,
}: {
  title: string;
  sport: {
    name: string;
    image: {uri: string} | ImageRequireSource;
  };
  organization: {
    name: string;
    image: {uri: string} | ImageRequireSource;
  };
  I18n: any;
}) => {
  return (
    <View style={styles.dashboard}>
      <Heading text={title} type={FontTypes.Bold} />
      <View style={styles.line} />
      <View style={rowSpaceBetween}>
        <Heading text={I18n.sport} type={FontTypes.Regular} size={14} />
        <View style={rowCenter}>
          <Image source={sport.image} style={styles.icon} />
          <Heading
            text={sport.name}
            type={FontTypes.Bold}
            size={14}
            marginBottom={3}
            alignment="right"
            numberOfLines={2}
            style={{
              maxWidth: Metrics.scale(85),
            }}
          />
        </View>
      </View>
      <View style={styles.line} />
      <View style={rowSpaceBetween}>
        <Heading text={I18n.organization} type={FontTypes.Regular} size={14} />
        <View style={rowAlign}>
          <Image source={organization.image} style={styles.icon} />
          <Heading
            text={organization.name}
            type={FontTypes.Bold}
            size={14}
            marginBottom={3}
            alignment="right"
            numberOfLines={2}
            style={{
              maxWidth: Metrics.scale(85),
            }}
          />
        </View>
      </View>
    </View>
  );
};

export const Item = ({
  icon,
  title,
  handlePress,
  showRightIcon = true,
}: {
  icon: ImageRequireSource;
  title: string;
  handlePress?: () => void;
  showRightIcon?: boolean;
}) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <View style={rowAlign}>
        <Icon source={icon} fill="transparent" height={24} width={24} />
        <Heading
          text={title}
          type={FontTypes.Bold}
          size={16}
          style={styles.text}
          color={APP_PRIMARY_TEXT}
          marginBottom={3}
          numberOfLines={2}
        />
      </View>
      {showRightIcon && (
        <Icon
          source={require('@Asset/icons/AngleRight.svg')}
          fill="transparent"
          height={15}
          width={20}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    padding: Metrics.scale(20),
    backgroundColor: Colors.SKY_BLUE,
    borderRadius: Metrics.scale(8),
    marginBottom: Metrics.verticalScale(25),
  },
  icon: {
    width: Metrics.scale(24),
    height: Metrics.scale(24),
    marginRight: Metrics.scale(8),
  },
  line: {
    height: 1,
    backgroundColor: Colors.BLACK_TWO,
    opacity: 0.2,
    width: '100%',
    alignSelf: 'center',
    marginVertical: Metrics.verticalScale(15),
  },
  itemContainer: {
    ...rowSpaceBetween,
    backgroundColor: Colors.WHITE,
    paddingVertical: Metrics.verticalScale(10),
    paddingHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(10),
    marginBottom: Metrics.verticalScale(15),
    borderColor: Colors.GREY,
    borderWidth: 1,
  },
  text: {
    marginLeft: Metrics.scale(20),
    width: Metrics.scale(200),
  },
});
