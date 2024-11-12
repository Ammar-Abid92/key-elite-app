import {ComponentType} from 'react';
import {Control} from 'react-hook-form';
import {TextInputProps, ViewStyle} from 'react-native';

export type InputFieldProps<T> =
  | {
      trigger?: string;
      blurTrigger?: string;
      valuePropName?: string;
      component?: ComponentType<any>;
      name: string;
      label: string;
      as?: ComponentType<any>;
      control: Control<any>;
      wrapperStyle?: ViewStyle | ViewStyle[];
    } & T &
      TextInputProps;
