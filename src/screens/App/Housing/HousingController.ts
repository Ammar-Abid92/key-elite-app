import {useLanguageContext} from '@Context/languageContext';
import {Linking} from 'react-native';

export const useHousing = () => {
  const {I18n} = useLanguageContext();
  const handleLinkPress = () => {
    Linking.openURL('https://www.propertywebsite.com');
  };

  const Data = {
    propertyInfo: {
      propertyName: 'Whispering Pines Retreat',
      address: '14876 Oak Leaf, Stafford, TX, 77890. Unit - 789',
    },
    propertyDetails: {
      description:
        'Welcome to Maple Grove Apartments in Rivertown, California! This cozy apartment offers a spacious layout with modern amenities, two bedrooms, and a bright living area. Enjoy nearby shopping, dining, and parks. Dont miss this great opportunity!',
      mondayToFriday: '9:00 AM - 5:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed',
      website: 'www.propertywebsite.com',
    },
    roommateDetails: {
      roommateName: 'John Doe',
    },
  };

  return {
    I18n,
    handleLinkPress,
    Data,
  };
};
