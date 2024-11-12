// import {
//   ACTIVE_RIDE_STATUS,
//   APP_SHEET_TYPES,
//   NotificationTypes,
// } from '@Constants/enum';
// import NavigationRoutes from '@Navigator/NavigationRoutes';
// import {
//   convertDateTime,
//   createDynamicUrl,
//   isEmpty,
//   isPlatformIOS,
// } from '@Utility/utilities';
// import notifee, {
//   AndroidImportance,
//   EventType,
//   Event as RecivedEvent,
// } from '@notifee/react-native';
// import messaging, {
//   FirebaseMessagingTypes,
// } from '@react-native-firebase/messaging';
// import {Alert, Linking} from 'react-native';
// import {PERMISSIONS, request} from 'react-native-permissions';
// import {getCurrentRouteName, navigate, pop} from './navigationService';
// import {useAppSheet} from '@Components/BottomSheets/AppSheet/AppSheet';
// import {useTipSheet} from '@Components/BottomSheets/TipSheet/TipSheet';
// import {queryClient} from '@Api/Client';
// import STORAGE_CONST from '@Constants/storage';

// async function requestUserPermission() {
//   const authStatus = isPlatformIOS
//     ? await messaging().requestPermission()
//     : await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);

//   switch (authStatus) {
//     case messaging.AuthorizationStatus.AUTHORIZED:
//     case messaging.AuthorizationStatus.PROVISIONAL:
//     case 'granted':
//       return true;
//     case messaging.AuthorizationStatus.DENIED:
//     case 'denied':
//     default:
//       Alert.alert(
//         'Notification Permission Required',
//         'Please enable notification permissions in your device settings to receive notifications.',
//         [
//           {
//             text: 'Cancel',
//             onPress: () => {},
//             style: 'cancel',
//           },
//           {
//             text: 'Open Settings',
//             onPress: () => {
//               isPlatformIOS
//                 ? Linking.openURL('app-settings:')
//                 : Linking.sendIntent(
//                     'android.settings.LOCATION_SOURCE_SETTINGS',
//                   );
//             },
//           },
//         ],
//       );

//       return false;
//   }
// }

// async function getFCMToken() {
//   try {
//     const token = await messaging().getToken();
//     return token;
//   } catch (err) {
//     console.warn('Error in getting FCM token', err);
//     throw err;
//   }
// }

// async function deleteToken() {
//   try {
//     await messaging().deleteToken();
//     return true;
//   } catch (err) {
//     console.error('Error in deleting FCM token', err);
//     throw err;
//   }
// }

// function createNotificationListeners() {
//   messaging().onMessage(displayNotification);
//   messaging().setBackgroundMessageHandler(displayNotification);
//   messaging().onNotificationOpenedApp(handleNavigation);
//   messaging().getInitialNotification().then(handleNavigation);

//   notifee.onForegroundEvent(handleNotifeeEvent);
//   notifee.onBackgroundEvent(handleNotifeeEvent);
// }

// async function displayNotification(
//   remoteMessage: FirebaseMessagingTypes.RemoteMessage,
// ) {
//   if (!remoteMessage) return;

//   const {data} = remoteMessage as any;
//   // console.log('remoteMessage ------------------->', JSON.stringify(data));

//   const channelId = await notifee.createChannel({
//     id: 'preferred-ride-user-app_notification_channel_id',
//     name: 'foreground_notification',
//     vibration: true,
//     sound: 'default',
//     importance: AndroidImportance.HIGH,
//   });

//   if (+data?.Target == NotificationTypes.RideEnded) {
//     getCurrentRouteName() == NavigationRoutes.APP_STACK.ACTIVE_BOOKING &&
//       pop(2);
//     useAppSheet.getState().present(true, APP_SHEET_TYPES.RIDE_COMPLETED);
//     setTimeout(() => {
//       useAppSheet.getState().present(false, APP_SHEET_TYPES.RIDE_COMPLETED);
//       useTipSheet.getState().present(data?.RideId);
//     }, 1000);
//   }

//   if (+data?.Target == NotificationTypes.RideAborted) {
//     queryClient.invalidateQueries({
//       queryKey: [STORAGE_CONST.CANCELLED_BOOKING],
//     });
//     getCurrentRouteName() == NavigationRoutes.APP_STACK.ACTIVE_BOOKING &&
//       navigate(NavigationRoutes.APP_STACK.CANCELLED_BOOKINGS);
//   }

//   await notifee.displayNotification({
//     title: data?.Title,
//     body: createDynamicUrl(data?.Body, {
//       Time: convertDateTime(data?.Date, 'hh:mm A'),
//       Date: convertDateTime(data?.Date, 'DD/MM/YYYY'),
//       MinDate: convertDateTime(data?.MinDate, 'DD/MM/YYYY'),
//       MaxDate: convertDateTime(data?.MaxDate, 'DD/MM/YYYY'),
//     }),
//     data: data,
//     android: {channelId, pressAction: {id: 'default'}},
//   });
// }

// function handleNavigation(remoteMessage?: any) {
//   if (!remoteMessage || isEmpty(remoteMessage?.detail?.notification?.data))
//     return;

//   const {data} = remoteMessage.detail.notification;
//   // console.log('notification ------------------->', JSON.stringify(data));

//   switch (+data?.Target) {
//     case NotificationTypes.BookingConfirmation:
//       if (+data.RideStatus == ACTIVE_RIDE_STATUS.SCHEDULED) {
//         pop();
//         navigate(NavigationRoutes.APP_STACK.BOOKING_DETAILS, {
//           id: +data?.BookingId,
//         });
//       } else {
//         navigate(NavigationRoutes.APP_STACK.ACTIVE_BOOKING);
//       }
//       break;
//     case NotificationTypes.RideReminder:
//     case NotificationTypes.QRScanReminder:
//     case NotificationTypes.CashPaymentSuccess:
//       navigate(NavigationRoutes.APP_STACK.ACTIVE_BOOKING);
//       break;
//     case NotificationTypes.RecurringRideReminder:
//       navigate(NavigationRoutes.APP_STACK.BOOKING_DETAILS, {
//         id: +data?.BookingId,
//       });
//       break;
//     case NotificationTypes.RideAborted:
//       navigate(NavigationRoutes.APP_STACK.CANCELLED_BOOKINGS);
//       break;
//   }
// }

// async function handleNotifeeEvent(remoteMessage: RecivedEvent) {
//   const {type, detail} = remoteMessage;

//   switch (type) {
//     case EventType.DISMISSED:
//       notifee.cancelNotification(detail?.notification?.id || '');
//       break;
//     case EventType.ACTION_PRESS:
//     case EventType.PRESS:
//       handleNavigation(remoteMessage);
//       break;
//   }
// }

// const NotificationService = {
//   requestUserPermission,
//   getFCMToken,
//   deleteToken,
//   createNotificationListeners,
// };

// export default NotificationService;
