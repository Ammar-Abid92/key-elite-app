import {TextInputProps} from 'react-native';

export type SearchInputProps = {
  onPress: (details: {latitude: number; longitude: number}) => void;
  placeholder?: string;
  textInputProps?: TextInputProps;
  debounce?: number;
  numberOfResults?: number;
};
