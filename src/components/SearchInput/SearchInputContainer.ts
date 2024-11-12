import {GetPlacesResponse, getPlaces} from '@Service/locationService';
import Utils from '@Utility/Utils';
import React, {useImperativeHandle, useState} from 'react';
import {Keyboard, LayoutAnimation, UIManager} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function useSearchInput(
  numberOfResults: number,
  ref: any,
  onPress: (coords: {latitude: number; longitude: number}) => void,
) {
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  function handleOnChange(text: string) {
    setInput(text);
  }

  const {data, isSuccess, isPending} = getPlaces({
    input: input,
    numberOfResults,
  });

  function toggleOpen(value: boolean) {
    if (!value) {
      Keyboard.dismiss();
    }
    setOpen(value);
  }

  React.useEffect(() => {
    if (isSuccess && data.length > 0) {
      toggleOpen(true);
    }
  }, [isSuccess]);

  useImperativeHandle(ref, () => ({
    showResults: () => {
      if (!open) {
        toggleOpen(true);
      }
    },
    hideResults: () => {
      if (open) {
        toggleOpen(false);
      }
    },
  }));

  const onRowPress = (item: GetPlacesResponse[0]) => () => {
    onPress({
      latitude: item.latitude,
      longitude: item.longitude,
    });
    toggleOpen(false);
  };

  function handleFocus() {
    if (data) {
      toggleOpen(true);
    }
  }

  function handleClose() {
    toggleOpen(false);
  }

  return {
    open,
    data,
    isPending,
    handleOnChange,
    handleClose,
    handleFocus,
    onRowPress,
  };
}
