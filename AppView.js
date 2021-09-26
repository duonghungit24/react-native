import React from 'react';
import {View, StyleSheet} from 'react-native';
import Refresh from './src/refreshControl';
import ListArr from './src/flastList';
const AppView = () => {
  return (
    <View style={styles.container}>
      <ListArr />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppView;
