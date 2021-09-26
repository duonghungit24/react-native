import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, RefreshControl} from 'react-native';

const Refresh = () => {
  const [list, setList] = useState([
    {key: 1, item: 'item1'},
    {key: 2, item: 'item2'},
    {key: 3, item: 'item3'},
    {key: 4, item: 'item4'},
    {key: 5, item: 'item5'},
    {key: 6, item: 'item6'},
    {key: 7, item: 'item7'},
    {key: 8, item: 'item8'},
    {key: 9, item: 'item9'},
    {key: 10, item: 'item10'},
  ]);
  const [refresh, setRefresh] = useState(false);
  const handleReFresh = () => {
    setRefresh(true);
    setList([...list, {key: 100, item: 'item 0'}]);
    setRefresh(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleReFresh} />
      }>
      {list.map(i => {
        return (
          <View key={i.key} style={styles.wrapper}>
            <Text style={styles.titleText}>{i.item}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: 'red',
    padding: 20,
    marginTop: 5,
  },
  titleText: {
    color: 'white',
    fontSize: 24,
  },
});
export default Refresh;
