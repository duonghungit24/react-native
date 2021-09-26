import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppView from './AppView';
const App = () => {
  return (
    <View style={styles.container}>
      <AppView />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
