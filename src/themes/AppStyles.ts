import Metrics from '@Utility/Metrics';
import {ViewStyle} from 'react-native';
import {APP_PRIMARY_TEXT, Colors} from './Colors';
import Fonts from './Fonts';

const appMainContainer = {
  backgroundColor: Colors.APP_BACKGROUND,
  flexGrow: 1,
};

const centerAlign: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const inputControl: ViewStyle = {
  flex: 1,
  height: Metrics.verticalScale(50),
  ...Fonts.Medium(14, APP_PRIMARY_TEXT),
};

const flexOne: ViewStyle = {
  flex: 1,
};

const row: ViewStyle = {
  flexDirection: 'row',
};

const rowAlign: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
};



const rowSpaceBetween: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const rowCenter: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const columnCenter: ViewStyle = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export {
  appMainContainer,
  inputControl,
  centerAlign,
  flexOne,
  row,
  rowAlign,
  rowSpaceBetween,
  rowCenter,
  columnCenter,
};
