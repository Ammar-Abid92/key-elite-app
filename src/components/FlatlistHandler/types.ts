import {UseInfiniteQueryResult} from '@tanstack/react-query';
import {FlatListProps, ViewStyle} from 'react-native';

export type FlatListHandlerPropType<T> = {
  isLoading?: boolean;
  listEmptyText?: string;
  shouldFetchMore?: boolean;
  shouldRefresh?: boolean;
  meta: UseInfiniteQueryResult;
  footerLoadingCondition?: boolean;
  listEmptyComponentStyle?: ViewStyle;
  flatListRef?: any;
  noEmptyComponent?: boolean;
} & FlatListProps<T>;
