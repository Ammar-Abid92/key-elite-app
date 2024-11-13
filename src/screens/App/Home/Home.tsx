import Heading from '@Components/TextComponents/Heading';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

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
      <Heading
        text="Home"
        size={24}
        style={{marginBottom: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
