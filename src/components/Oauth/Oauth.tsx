import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import IconButton from '@Components/Buttons/IconButton';

const Oauth = () => {
  return (
    <View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <IconButton
          source={require('@Asset/icons/Google.svg')}
          onPress={() => {
            /* Handle Google sign in */
          }}
          style={styles.socialIcon}
          imageHeight={36}
          imageWidth={36}
        />
        <IconButton
          source={require('@Asset/icons/Facebook.svg')}
          onPress={() => {
            /* Handle Facebook sign in */
          }}
          style={styles.socialIcon}
          imageHeight={36}
          imageWidth={36}
        />
        <IconButton
          source={require('@Asset/icons/Apple.svg')}
          onPress={() => {
            /* Handle Apple sign in */
          }}
          style={styles.socialIcon}
          imageHeight={36}
          imageWidth={36}
        />
      </View>
    </View>
  );
};

export default Oauth;

const styles = StyleSheet.create({
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.verticalScale(20),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.BROWN,
  },
  orText: {
    marginHorizontal: Metrics.scale(10),
    fontSize: Metrics.scale(14),
    color: Colors.BROWN,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Metrics.verticalScale(15),
  },
  socialIcon: {
    marginHorizontal: Metrics.scale(10),
  },
});
