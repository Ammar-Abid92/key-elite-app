import React from 'react';
import {TIcon} from './types';
import {View} from 'react-native';
import Metrics from '@Utility/Metrics';

function Icon({width = 20, height = 20, fill, source, style, ...rest}: TIcon) {
  //@ts-ignore
  const Component = source?.default;

  if (!Component) return null;

  return (
    <View style={style}>
      <Component
        fill={fill}
        width={Metrics.scale(width)}
        height={Metrics.scale(height)}
        {...rest}
      />
    </View>
  );
}

export default Icon;
