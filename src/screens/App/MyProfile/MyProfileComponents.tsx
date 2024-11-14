import IconButton from '@Components/Buttons/IconButton';
import ImageLoader from '@Components/ImageLoader/ImageLoader';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import {StyleSheet, View} from 'react-native';
import {AddProfilePicProps, DeleteIconProps} from './type';

export const AddProfilePic = ({
  image,
  onPress,
  initials,
}: AddProfilePicProps) => {
  return (
    <View style={styles.imageCircle}>
      <ImageLoader
        source={image ? {uri: image} : 0}
        resizeMode="cover"
        containerStyle={styles.backgroundImageStyle}
        style={styles.backgroundImageStyle}
        initials={initials}
        initialsSize={30}>
        <View style={styles.overlay} />
      </ImageLoader>
      <IconButton
        source={require('@Asset/icons/Camera.svg')}
        imageHeight={16}
        imageWidth={16}
        onPress={onPress}
        style={styles.iconContainer}
      />
    </View>
  );
};

export const DeleteIcon = ({handlePress}: DeleteIconProps) => {
  return (
    <IconButton
      source={require('@Asset/icons/UserEdit.svg')}
      onPress={handlePress}
      style={styles.mr20}
    />
  );
};

const styles = StyleSheet.create({
  imageCircle: {
    width: Metrics.scale(131),
    height: Metrics.scale(131),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.scale(50),
    marginBottom: Metrics.verticalScale(30),
    alignSelf: 'center',
  },
  overlay: {
    width: Metrics.scale(131),
    height: Metrics.scale(131),
    borderColor: Colors.NAVY_BLUE,
    borderRadius: Metrics.scale(80),
    borderWidth: 4,
  },
  iconContainer: {
    position: 'absolute',
    top: Metrics.scale(105),
    right: Metrics.scale(10),
    width: Metrics.scale(30),
    height: Metrics.scale(30),
    backgroundColor: Colors.WHITE,
    elevation: 5,
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.NAVY_BLUE,
    zIndex: 200,
  },
  cameraIcon: {
    width: Metrics.scale(12),
    height: Metrics.scale(10),
  },
  backgroundImageStyle: {
    width: Metrics.scale(131),
    height: Metrics.scale(131),
    borderRadius: Metrics.scale(80),
  },
  mr20: {marginRight: Metrics.scale(20)},
});
