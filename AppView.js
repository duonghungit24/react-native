import React from 'react';
import {View, StyleSheet} from 'react-native';
import Refresh from './src/refreshControl';
const AppView = () => {
  return (
    <View style={styles.container}>
      <Refresh />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppView;
