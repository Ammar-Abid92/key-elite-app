import InputField from '@Components/InputField/InputField';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AddProfilePic} from './MyProfileComponents';
import useMyProfile from './MyProfileContainer';
import {MyProfilePropsType} from './type';

export default function MyProfile({navigation}: MyProfilePropsType) {
  const {
    control,
    isDirty,
    isPending,
    handleSubmit,
    image,
    handlePressIcon,
    initials,
    I18n,
  } = useMyProfile();

  return (
    <View style={styles.mainContainer}>
      <AddProfilePic
        image={image}
        onPress={handlePressIcon}
        initials={initials}
      />
      <InputField
        control={control}
        name="email"
        label={I18n.email}
        autoCapitalize="none"
        placeholder={I18n.email}
        editable={false}
        containerStyle={styles.opac}
        labelStyle={styles.label}
      />
      <InputField
        control={control}
        name="username"
        label={I18n.username}
        autoCapitalize="none"
        placeholder={I18n.username}
        editable={false}
        containerStyle={styles.opac}
        labelStyle={styles.label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: Metrics.scale(20),
    paddingVertical: Metrics.verticalScale(20),
  },
  width100: {width: '100%'},
  mt20: {marginTop: Metrics.verticalScale(20)},
  buttonStyle: {marginVertical: Metrics.verticalScale(50)},
  label: {
    color: Colors.DARK_GREY,
  },
  opac: {
    opacity: 0.8,
  },
});
