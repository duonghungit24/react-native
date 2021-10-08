import React from 'react';
import {View, StyleSheet} from 'react-native';
import Refresh from './src/refreshControl';
import ListArr from './src/flastList';
import Button from './src/button';
const AppView = () => {
  return (
    <View style={styles.container}>
      <Refresh />
      {/* <ListArr /> */}
      {/* <Button /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppView;
