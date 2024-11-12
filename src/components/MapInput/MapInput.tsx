// import IconButton from '@Components/Buttons/IconButton';
// import Input from '@Components/Input/Input';
// // import {
// //   GetPlacesResponse,
// //   getLocationPermission,
// //   getPlaces,
// // } from '@Service/locationService';
// import {rowAlign} from '@Theme/AppStyles';
// import {APP_PRIMARY_COLOR} from '@Theme/Colors';
// import Metrics from '@Utility/Metrics';
// import React, {useState} from 'react';
// import {StyleSheet, View} from 'react-native';
// import AutoCompleteWithMap from './AutoCompleteWithMap';
// import {MapInputProps} from './types';

// const MapInput = ({
//   style,
//   value,
//   onFocus,
//   disabled,
//   onSubmit,
//   placeholder,
// }: MapInputProps) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [text, setText] = useState(value?.address);

//   const handleConfirm = (coords: GetPlacesResponse[0]) => {
//     onFocus();
//     onSubmit(coords);
//     setText(coords.address);
//     setModalVisible(false);
//   };

//   function handlePress() {
//     getLocationPermission().finally(() => {
//       setModalVisible(true);
//     });
//   }

//   function handleClose() {
//     setModalVisible(false);
//   }

//   const {data} = getPlaces({
//     input: text,
//     numberOfResults: 1,
//   });

//   function handleBlur() {
//     if (data?.length) {
//       handleConfirm({
//         latitude: data[0].latitude,
//         longitude: data[0].longitude,
//         address: text,
//       });
//     }
//   }

//   return (
//     <View style={[styles.inputControl, style]}>
//       <View style={rowAlign}>
//         <Input
//           editable={!disabled}
//           onBlur={handleBlur}
//           value={text}
//           onChangeText={setText}
//           placeholder={placeholder}
//         />
//         <IconButton
//           disabled={disabled}
//           onPress={handlePress}
//           source={require('@Asset/icons/Crosshair/Crosshair.png')}
//           style={[styles.size25, styles.mH10]}
//           imageStyle={styles.tintPrimary}
//         />
//       </View>
//       <AutoCompleteWithMap
//         visible={modalVisible}
//         onCancel={handleClose}
//         onConfrim={handleConfirm}
//         initialValue={value}
//       />
//     </View>
//   );
// };

// export default MapInput;

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: 'center'},
//   inputControl: {
//     flex: 1,
//     height: Metrics.verticalScale(50),
//   },
//   size25: {
//     height: Metrics.verticalScale(25),
//     width: Metrics.verticalScale(25),
//   },
//   mH10: {
//     marginHorizontal: Metrics.scale(10),
//   },
//   tintPrimary: {
//     tintColor: APP_PRIMARY_COLOR,
//   },
// });
