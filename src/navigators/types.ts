import {NavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export interface BaseNavigationProps {
  navigation?: NavigationProp<NativeStackNavigatorProps>;
  route?: RouteProp<any>;
}
