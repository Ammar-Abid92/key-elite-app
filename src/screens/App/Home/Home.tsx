import InputField from '@Components/InputField/InputField';
import MapInput from '@Components/MapInput/MapInput';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  const {control} = useForm({
    mode: 'all',
    defaultValues: {
      location: {
        latitude: 0,
        longitude: 0,
        address: '',
      },
    },
  });

  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}>
      <InputField
        label="Location"
        name="location"
        control={control}
        as={MapInput}
        trigger="onSubmit"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
