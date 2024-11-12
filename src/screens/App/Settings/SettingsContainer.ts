import {getLoggedInUserData} from '@ReusableFunctions/index';
import React from 'react';

export default function useSettings() {
  const [isEnabled, toggleSwitch] = React.useReducer(prevState => {
    return !prevState;
  }, getLoggedInUserData()?.isBiometricEnabled);

  return {
    isEnabled,
    toggleSwitch,
  };
}
