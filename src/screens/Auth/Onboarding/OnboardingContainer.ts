import STORAGE_CONST from '@Constants/storage';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import { reset } from '@Service/navigationService';
import { setItem } from '@Service/storageService';
import { useState } from 'react';

export default function useOnboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleForward = () => {
    if (currentIndex < 2) {
      setCurrentIndex(index=>index+1);
    } else {
      setItem(STORAGE_CONST.APP_ONBOARDED, true);
      reset(NavigationRoutes.AUTH_STACK.LOGIN);
    }
  };

  const handleSkip = () => {
    reset(NavigationRoutes.AUTH_STACK.LOGIN);
    setItem(STORAGE_CONST.APP_ONBOARDED, true);
  };

  return {
    handleForward,
    handleSkip,
    currentIndex,
  };
}
