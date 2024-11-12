import React from 'react';
import {useController} from 'react-hook-form';
import MaterialTextInput from '../MaterialTextInput/MaterialTextInput';
import {InputFieldProps} from './type';

export default function InputField<T>({
  component: Component = MaterialTextInput,
  valuePropName,
  trigger,
  blurTrigger,
  ...rest
}: InputFieldProps<T>) {
  const {
    field: {onBlur, onChange, value, ref},
    fieldState: {error, isTouched, invalid},
  } = useController({...rest} as any);

  return (
    <Component
      {...{
        [valuePropName || 'value']: value,
        [trigger || 'onChangeText']: onChange,
        [blurTrigger || 'onBlur']: onBlur,
      }}
      inputRef={ref}
      error={(isTouched || invalid) && error?.message}
      {...rest}
    />
  );
}
