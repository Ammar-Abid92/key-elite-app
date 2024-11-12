import ApiClientProvider from '@Api/Client';
import ErrorBoundary from '@Components/ErrorBoundries/ErrorBoundries';
import {Colors} from '@Theme/Colors';
import React from 'react';
import {StatusBar} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';
import AuthNavigator from './AuthNavigator';
import Toast from 'rn-animated-toast';
import Spinner from '@Components/Loader/Spinner';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {isPlatformIOS} from '@Utility/Utils';
import {LanguageProvider} from '@Context/languageContext';

export default function App() {
  React.useEffect(() => {
    if (isPlatformIOS) {
      KeyboardManager.setEnable(true);
      KeyboardManager.setToolbarPreviousNextButtonEnable(true);
      KeyboardManager.setToolbarTintColor(Colors.TRANSPARENT);
    }
  }, []);

  return (
    <ErrorBoundary>
      <StatusBar
        backgroundColor={Colors.TRANSPARENT}
        barStyle="dark-content"
        translucent
      />
      <ApiClientProvider>
        <LanguageProvider>
          <BottomSheetModalProvider>
            <AuthNavigator />
          </BottomSheetModalProvider>
        </LanguageProvider>
      </ApiClientProvider>
      <Spinner />
      <Toast position="top" />
    </ErrorBoundary>
  );
}
