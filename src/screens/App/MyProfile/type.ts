import {NavigationProp} from '@react-navigation/native';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export type MyProfileForm = {
  username: string;
  fullName: string;
  phone: string;
  email: string | null;
  password: string;
};

export type AddProfilePicProps = {
  image: string;
  onPress: () => void;
  initials?: string;
};

export type MyProfilePropsType = {
  navigation: NavigationProp<NativeStackNavigatorProps>;
};

export type DeleteIconProps = {handlePress: () => void};

export enum VerificationSheetTypes {
  Phone = 'Phone',
  Email = 'Email',
}

export type VerificationSheetProps = {
  type: VerificationSheetTypes | null;
  data: any;
};
