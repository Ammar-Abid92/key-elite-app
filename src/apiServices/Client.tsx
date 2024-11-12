import {CACHE_TIME, STALE_TIME} from '@Constants/api';
import NetInfo from '@react-native-community/netinfo';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
  onlineManager,
} from '@tanstack/react-query';
import React from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';

export const defaultOptions = {
  getNextPageParam: (lastPage: any) => {
    if (lastPage?.HasNextPage) {
      return Number(lastPage?.Page);
    }
  },
};

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'online',
      staleTime: STALE_TIME,
      gcTime: CACHE_TIME,
      retry: (failCount, error: any) => error.cause == 401 && failCount < 1,
    },
    mutations: {
      networkMode: 'always',
      retry: (failCount, error: any) => error.cause == 401 && failCount < 1,
    },
  },
});

export default function ApiClientProvider(props: React.PropsWithChildren) {
  const {children} = props;

  React.useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(Boolean(state.isInternetReachable));
      });
    });

    const appStateListener = AppState.addEventListener(
      'change',
      onAppStateChange,
    );

    return () => appStateListener.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
