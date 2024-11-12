import {inputControl} from '@Theme/AppStyles';
import {Colors} from '@Theme/Colors';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

export default function Input(
  props: TextInputProps & {inputRef?: any; showValue?: any},
) {
  const {style, placeholder, inputRef, ...rest} = props;

  return (
    <TextInput
      ref={inputRef}
      style={[inputControl, style]}
      selectionColor={Colors.NAVY_BLUE}
      {...(!!placeholder && {
        placeholderTextColor: Colors.DARK_GREY,
        placeholder,
      })}
      {...rest}
    />
  );
}
