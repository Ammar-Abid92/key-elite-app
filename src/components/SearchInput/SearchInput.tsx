import IconButton from '@Components/Buttons/IconButton';
import Heading from '@Components/TextComponents/Heading';
import {APP_PRIMARY_COLOR, Colors} from '@Theme/Colors';
import {FontTypes} from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import Utils from '@Utility/Utils';
import React, {forwardRef} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useSearchInput from './SearchInputContainer';
import {SearchInputProps} from './types';

const SearchInput = (
  {
    onPress,
    placeholder = 'Search...',
    textInputProps,
    debounce = 0,
    numberOfResults = 5,
  }: SearchInputProps,
  ref: any,
) => {
  const {
    open,
    data,
    isPending,
    handleOnChange,
    handleClose,
    handleFocus,
    onRowPress,
  } = useSearchInput(numberOfResults, ref, onPress);

  return (
    <View style={[styles.mainContainer]}>
      <View style={[styles.searchContainer]}>
        <Image
          source={require('@Asset/icons/SearchIcon/Search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          onFocus={handleFocus}
          placeholder={placeholder}
          placeholderTextColor={Colors.STEEL}
          style={styles.searchTxtInput}
          onChangeText={Utils.debounce(handleOnChange, debounce)}
          cursorColor={APP_PRIMARY_COLOR}
          {...textInputProps}
        />
        {open && !isPending && data?.length ? (
          <IconButton
            onPress={handleClose}
            source={require('@Asset/icons/Plus/Plus.png')}
            style={[styles.rotate45, styles.size15]}
            imageStyle={[styles.size15, styles.tintSteel]}
          />
        ) : (
          <ActivityIndicator
            size="small"
            color={Colors.STEEL}
            animating={isPending}
          />
        )}
      </View>
      {!!data?.length && open && (
        <View style={styles.listView}>
          {data.map(item => (
            <TouchableOpacity
              style={styles.listRow}
              onPress={onRowPress(item)}
              activeOpacity={0.5}>
              <Heading
                type={FontTypes.Light}
                text={item.address}
                size={13}
                numberOfLines={2}
              />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default forwardRef(SearchInput);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: Colors.WHITE,
    borderRadius: Metrics.scale(5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: Metrics.scale(21),
    paddingLeft: Metrics.scale(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchTxtInput: {
    flex: 1,
    height: Metrics.scale(50),
  },
  searchIcon: {
    height: Metrics.scale(15),
    width: Metrics.scale(15),
    marginRight: Metrics.scale(10),
    tintColor: Colors.CHARCOAL_GREY,
  },
  listView: {
    backgroundColor: Colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: Metrics.scale(10),
    paddingVertical: Metrics.verticalScale(10),
    marginTop: Metrics.verticalScale(10),
  },
  listRow: {
    paddingHorizontal: Metrics.scale(10),
    paddingVertical: Metrics.verticalScale(5),
  },
  rotate45: {
    transform: [{rotate: '45deg'}],
  },
  size15: {
    height: Metrics.scale(15),
    width: Metrics.scale(15),
  },
  tintSteel: {
    tintColor: Colors.STEEL,
  },
});
