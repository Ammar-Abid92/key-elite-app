import {Colors} from '@Theme/Colors';
import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, StyleSheet} from 'react-native';
import {ImageLoaderProps} from './types';

export default function ImageLoader({
  style = {},
  source,
  containerStyle = {},
  children,
  resizeMode = 'cover',
}: ImageLoaderProps) {
  const [isLoading, setisLoading] = useState(Boolean(source));
  const [imageSource, setImageSource] = useState(source);

  function handleError() {
    setisLoading(false);
    setImageSource(require('@Asset/icons/Anonymous/Anonymous.png'));
  }

  useLayoutEffect(() => {
    setImageSource(source);
    // @ts-ignore
  }, [source?.uri]);

  return (
    <ImageBackground
      source={imageSource}
      style={[styles.container, containerStyle]}
      onLoad={() => setisLoading(false)}
      imageStyle={[styles.image, style]}
      resizeMethod="scale"
      resizeMode={resizeMode}
      onError={handleError}>
      <>
        {children}
        {isLoading && (
          <ActivityIndicator size="small" color={Colors.CERULEAN} />
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
});
