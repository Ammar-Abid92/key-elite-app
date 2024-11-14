import Heading from '@Components/TextComponents/Heading';
import {Colors} from '@Theme/Colors';
import React, {useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import {ImageLoaderProps} from './types';

export default function ImageLoader({
  style = {},
  source,
  containerStyle = {},
  children,
  resizeMode = 'cover',
  initials,
  initialsSize = 20,
}: ImageLoaderProps) {
  const [isLoading, setisLoading] = useState(Boolean(source));
  const [imageSource, setImageSource] = useState<ImageSourcePropType>(source);

  function handleError() {
    setisLoading(false);
    setImageSource(0);
  }

  useLayoutEffect(() => {
    setImageSource(source);
    // @ts-ignore
  }, [source?.uri, source]);

  return initials && !source ? (
    <View style={[containerStyle, styles.initialContainer]}>
      <Heading text={initials} size={initialsSize} />
    </View>
  ) : (
    <ImageBackground
      source={imageSource}
      style={[styles.container, containerStyle]}
      onLoadStart={() => setisLoading(true)}
      onLoad={() => setisLoading(false)}
      imageStyle={[styles.image, style]}
      resizeMethod="scale"
      resizeMode={resizeMode}
      onError={handleError}>
      <>
        {children}
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={Colors.NAVY_BLUE}
            style={styles.absolute}
          />
        )}
      </>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    backgroundColor: Colors.TRANSPARENT,
  },
  loading: {
    position: 'absolute',
  },
  initialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.NAVY_BLUE,
    borderWidth: 2,
  },
  absolute: {position: 'absolute'},
});
