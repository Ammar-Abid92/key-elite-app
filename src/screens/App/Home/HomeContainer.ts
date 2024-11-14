import {useLanguageContext} from '@Context/languageContext';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';

export const useHome = () => {
  const {I18n} = useLanguageContext();

  const handleNavigation = (route: string) => {
    switch (route) {
      case NavigationRoutes.APP_STACK.HOUSING:
        navigate(NavigationRoutes.APP_STACK.HOUSING);
        break;
      case NavigationRoutes.APP_STACK.MAINTENANCE_REQUEST:
        navigate(NavigationRoutes.APP_STACK.MAINTENANCE_REQUEST);
        break;
      case NavigationRoutes.APP_STACK.ARRIVAL_INSTRUCTIONS:
        navigate(NavigationRoutes.APP_STACK.ARRIVAL_INSTRUCTIONS);
        break;
      case NavigationRoutes.APP_STACK.UPLOAD_DL_CC:
        navigate(NavigationRoutes.APP_STACK.UPLOAD_DL_CC);
        break;
      default:
        break;
    }
  };

  return {
    I18n,
    handleNavigation,
  };
};
