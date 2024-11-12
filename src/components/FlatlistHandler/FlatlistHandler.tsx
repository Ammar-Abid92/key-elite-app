import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

import EmptyList from '@Components/EmptyList/EmptyList';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import {FlatListHandlerPropType} from './types';

function defaultKeyExtractor(item: any, index: number) {
  return item.id ?? index.toString();
}

export default function FlatListHandler<T>(props: FlatListHandlerPropType<T>) {
  const {
    meta,
    isLoading,
    listEmptyText,
    shouldFetchMore = true,
    shouldRefresh = true,
    footerLoadingCondition = false,
    keyExtractor = defaultKeyExtractor,
    listEmptyComponentStyle,
    flatListRef,
    noEmptyComponent = false,
    ...rest
  } = props;
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchMore = () => {
    const {hasNextPage, isFetchingNextPage, fetchNextPage} = meta;

    if (shouldFetchMore && hasNextPage && !isFetchingNextPage) fetchNextPage();
  };

  function onRefresh() {
    setIsRefreshing(true);
    meta?.refetch()?.finally(() => {
      setIsRefreshing(false);
    });
  }

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      extraData={isRefreshing}
      keyExtractor={keyExtractor}
      ListEmptyComponent={() =>
        isLoading && !meta?.isFetched ? (
          <ActivityIndicator
            size="small"
            color={Colors.CERULEAN}
            style={styles.mv15}
          />
        ) : (
          !noEmptyComponent && (
            <View style={listEmptyComponentStyle ?? null}>
              <EmptyList />
            </View>
          )
        )
      }
      {...(meta && {
        ...(shouldRefresh && {
          refreshControl: (
            <RefreshControl
              title=""
              onRefresh={onRefresh}
              refreshing={isRefreshing}
              tintColor={Colors.CERULEAN}
            />
          ),
          onRefresh: onRefresh,
          refreshing: isRefreshing,
        }),
        onEndReached: fetchMore,
        onEndReachedThreshold: 0.5,
        ListFooterComponent: () =>
          footerLoadingCondition || meta.isFetchingNextPage ? (
            <ActivityIndicator
              size="small"
              color={Colors.CERULEAN}
              style={styles.mv15}
            />
          ) : null,
      })}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  mv15: {
    marginVertical: Metrics.verticalScale(15),
  },
});
