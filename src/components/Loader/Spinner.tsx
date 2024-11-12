import {APP_PRIMARY_COLOR} from '@Theme/Colors';
import React, {RefObject} from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

let visibleSpinnerRef: RefObject<Function> = React.createRef();

export const _showSpinner = () => {
  visibleSpinnerRef?.current?.(true);
};

export const _hideSpinner = () => {
  visibleSpinnerRef?.current?.(false);
};

export default function Spinner() {
  const [visible, setVisiblity] = React.useState(false);

  React.useLayoutEffect(() => {
    // @ts-ignore
    visibleSpinnerRef.current = setVisiblity;
  }, []);

  return (
    <Modal
      onRequestClose={() => {}}
      animationType="fade"
      supportedOrientations={['landscape', 'portrait']}
      transparent
      visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={APP_PRIMARY_COLOR} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
});
