// import {API_MODES} from '@Constants/api';
// import {GOOGLE_API_KEY} from '@Constants/app_constants';
// import Utils from '@Utility/Utils';
// import {
//   UseMutationOptions,
//   UseQueryOptions,
//   useMutation,
//   useQuery,
// } from '@tanstack/react-query';
// import {Alert, Linking} from 'react-native';
// import Geolocation from 'react-native-geolocation-service';
// import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
// import {request as requestHttp} from './requestService';

// type GetPlaceNameRequest = {
//   latitude: number;
//   longitude: number;
// };

// type GetPlacesRequest = {
//   input: string;
//   numberOfResults?: number;
// };

// export type GetPlacesResponse = {
//   address: string;
//   latitude: number;
//   longitude: number;
// }[];

// type GetPlacesApiResponse = {
//   results: {
//     name: string;
//     formatted_address: string;
//     geometry: {
//       location: {
//         lat: number;
//         lng: number;
//       };
//     };
//   }[];
// };

// export function getPlaces(
//   payload: GetPlacesRequest,
//   options?: UseQueryOptions<GetPlacesResponse, any, GetPlacesResponse>,
// ) {
//   return useQuery({
//     queryKey: [payload.input],
//     queryFn: async () => {
//       const {data} = await requestHttp({
//         url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${payload.input}&fields=name,geometry,formatted_address&key=${GOOGLE_API_KEY}`,
//         method: API_MODES.GET,
//         showToast: false,
//       });

//       return (
//         (data as GetPlacesApiResponse)?.results
//           ?.map(item => ({
//             address: `${item.name}, ${item.formatted_address}`,
//             latitude: item.geometry.location.lat,
//             longitude: item.geometry.location.lng,
//           }))
//           .slice(0, payload.numberOfResults) ?? []
//       );
//     },
//     staleTime: 0,
//     gcTime: 0,
//     ...options,
//   });
// }

// export function getPlaceName(
//   options: UseMutationOptions<string, any, GetPlaceNameRequest>,
// ) {
//   return useMutation({
//     mutationFn: async payload => {
//       const {data} = await requestHttp({
//         url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${payload.latitude},${payload.longitude}&key=${GOOGLE_API_KEY}`,
//         method: API_MODES.GET,
//         params: {},
//       });

//       return data?.results[0]?.formatted_address ?? '';
//     },
//     ...options,
//   });
// }

// const PermissionConstant = Utils.isPlatformIOS
//   ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
//   : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

// export const fetchPermissionStatus = () => check(PermissionConstant);

// export function getLocationPermission() {
//   return new Promise<{latitude: number; longitude: number}>(
//     async (resolve, reject) => {
//       const permissionStatus = await fetchPermissionStatus();

//       switch (permissionStatus) {
//         case RESULTS.GRANTED:
//           const location = await getCurrentLocation();
//           resolve(location);
//           break;
//         case RESULTS.BLOCKED:
//           showAlert();
//           reject();
//           break;
//         case RESULTS.DENIED:
//           const permissionRequest = await request(PermissionConstant);
//           if (permissionRequest === RESULTS.GRANTED) {
//             const location = await getCurrentLocation();
//             resolve(location);
//           } else {
//             reject();
//           }
//           break;
//         default:
//           reject();
//       }
//     },
//   );
// }

// const showAlert = () => {
//   Alert.alert(
//     'Location Required',
//     'We need access to your location for app to function properly kindly grant location access from settings page.',
//     [
//       {
//         text: 'Cancel',
//         onPress: () => {},
//         style: 'cancel',
//       },
//       {
//         text: 'Open Settings',
//         onPress: () => {
//           Utils.isPlatformIOS
//             ? Utils.openURL('app-settings:')
//             : Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS');
//         },
//       },
//     ],
//   );
// };

// export const getCurrentLocation = () => {
//   return new Promise<{latitude: number; longitude: number}>(
//     (resolve, reject) => {
//       Geolocation.getCurrentPosition(
//         position => {
//           const {latitude, longitude} = position.coords;
//           resolve({latitude, longitude});
//         },
//         error => {
//           reject(error);
//         },
//         {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//       );
//     },
//   );
// };
