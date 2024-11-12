// import AppButton from '@Components/Buttons/AppButton';
// import IconButton from '@Components/Buttons/IconButton';
// import {
//   getCurrentLocation,
//   getLocationPermission,
//   getPlaceName,
// } from '@Service/locationService';
// import {flexOne} from '@Theme/AppStyles';
// import {APP_PRIMARY_COLOR, Colors} from '@Theme/Colors';
// import Metrics from '@Utility/Metrics';
// import Utils from '@Utility/Utils';
// import React, {useRef, useState} from 'react';
// import {Image, StyleSheet, View} from 'react-native';
// import MapView, {
//   PROVIDER_DEFAULT,
//   PROVIDER_GOOGLE,
//   Region,
// } from 'react-native-maps';
// import Modal from 'react-native-modal';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import SearchInput from '../SearchInput/SearchInput';
// import {AutoCompleteWithMapProps, LocationType} from './types';

// const defaultLocation = {
//   latitude: 29.76,
//   longitude: -95.365341,
// };

// const defaultLocationDelta = {
//   latitudeDelta: 0.004,
//   longitudeDelta: 0.0022,
// };

// const AutoCompleteWithMap = (props: AutoCompleteWithMapProps) => {
//   const {onCancel, onConfrim, visible, initialValue} = props;

//   const [showCurrentLocation, setShowCurrentLocation] = useState(false);

//   const mapRef = useRef<MapView>();
//   const inputRef = useRef<{
//     showResults: () => void;
//     hideResults: () => void;
//   }>();
//   const coords = useRef<LocationType>({
//     latitude: initialValue?.latitude ?? defaultLocation.latitude,
//     longitude: initialValue?.longitude ?? defaultLocation.longitude,
//   });

//   const {mutate: getName, isPending: isLoading} = getPlaceName({
//     onSuccess: (address: string) => {
//       onConfrim({...coords.current, address: address});
//     },
//   });

//   const handleAutoCompletePress = (details: LocationType) => {
//     coords.current = details;
//     animateToRegion(details);
//   };

//   async function handleModalOpen() {
//     try {
//       const location = await getLocationPermission();
//       if (
//         Utils.isEmpty(+initialValue.latitude) &&
//         Utils.isEmpty(+initialValue.longitude)
//       ) {
//         handleAutoCompletePress(location);
//       } else {
//         handleAutoCompletePress(initialValue);
//       }
//       setShowCurrentLocation(true);
//     } catch (error) {
//       setShowCurrentLocation(false);
//       handleAutoCompletePress(defaultLocation);
//     }
//   }

//   const animateToRegion = (coords: LocationType) => {
//     mapRef?.current?.animateToRegion({
//       ...coords,
//       ...defaultLocationDelta,
//     });
//   };

//   function gotToMyLocation() {
//     getCurrentLocation().then(animateToRegion);
//   }

//   function handleDone() {
//     getName(coords.current);
//   }

//   function handleOnRegionChangeComplete(region: Region) {
//     coords.current = region;
//     inputRef.current?.showResults();
//   }

//   function hideResults() {
//     inputRef.current?.hideResults();
//   }

//   return (
//     <Modal
//       onModalWillShow={handleModalOpen}
//       style={styles.m0}
//       animationInTiming={200}
//       animationOutTiming={200}
//       isVisible={visible}>
//       <View style={styles.mainContainer}>
//         <View
//           style={[
//             styles.searchNCrossContainer,
//             {
//               top: useSafeAreaInsets().top + 5,
//             },
//           ]}>
//           <IconButton
//             onPress={onCancel}
//             source={require('@Asset/icons/Plus/Plus.png')}
//             imageStyle={styles.closeIcon}
//             style={styles.closeIconContainer}
//           />
//           <SearchInput ref={inputRef} onPress={handleAutoCompletePress} />
//         </View>
//         <MapView
//           // @ts-ignore
//           ref={mapRef}
//           style={flexOne}
//           initialRegion={{
//             ...coords.current,
//             ...defaultLocationDelta,
//           }}
//           showsMyLocationButton={false}
//           showsUserLocation={true}
//           onRegionChange={hideResults}
//           onRegionChangeComplete={handleOnRegionChangeComplete}
//           provider={
//             Utils.isPlatformAndroid ? PROVIDER_GOOGLE : PROVIDER_DEFAULT
//           }
//           userInterfaceStyle="light"
//         />
//         {showCurrentLocation && (
//           <IconButton
//             onPress={gotToMyLocation}
//             source={require('@Asset/icons/Crosshair/Crosshair.png')}
//             imageStyle={styles.locationIcon}
//             style={styles.locationPinContainer}
//           />
//         )}
//         <AppButton
//           title="Done"
//           onPress={handleDone}
//           isLoading={isLoading}
//           style={styles.btnStyle}
//         />
//         <View pointerEvents="none" style={styles.markerContainer}>
//           <Image
//             source={require('@Asset/icons/Marker/Marker.png')}
//             style={styles.markerStyle}
//           />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default AutoCompleteWithMap;

// const styles = StyleSheet.create({
//   m0: {
//     margin: 0,
//   },
//   mainContainer: {
//     flex: 1,
//     backgroundColor: Colors.WHITE,
//   },
//   searchNCrossContainer: {
//     position: 'absolute',
//     zIndex: 999999,
//     flexDirection: 'row',
//     paddingHorizontal: Metrics.scale(20),
//   },
//   closeIconContainer: {
//     height: Metrics.scale(40),
//     width: Metrics.scale(40),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: APP_PRIMARY_COLOR,
//     borderRadius: Metrics.scale(25),
//     marginRight: Metrics.scale(10),
//     marginTop: Metrics.scale(5),
//   },
//   locationPinContainer: {
//     height: Metrics.scale(40),
//     width: Metrics.scale(40),
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.WHITE,
//     borderRadius: Metrics.scale(10),
//     position: 'absolute',
//     bottom: Metrics.scale(100),
//     right: Metrics.scale(20),
//     zIndex: 1,
//     shadowColor: Colors.CHARCOAL_GREY,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     ...(Utils.isPlatformIOS && {marginTop: Metrics.scale(40)}),
//   },
//   closeIcon: {
//     tintColor: Colors.WHITE,
//     height: Metrics.scale(15),
//     width: Metrics.scale(15),
//     transform: [{rotate: '45deg'}],
//   },
//   locationIcon: {
//     height: Metrics.scale(20),
//     width: Metrics.scale(20),
//     tintColor: APP_PRIMARY_COLOR,
//   },
//   btnStyle: {
//     position: 'absolute',
//     zIndex: 999999,
//     width: Metrics.screenWidth - Metrics.scale(80),
//     bottom: Metrics.verticalScale(30),
//     alignSelf: 'center',
//   },
//   markerContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   markerStyle: {
//     height: Metrics.scale(40),
//     width: Metrics.scale(40),
//     tintColor: APP_PRIMARY_COLOR,
//   },
// });
