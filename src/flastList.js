import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';

const ListArr = () => {
  const [list, setList] = useState([
    {key: '1', name: 'item1'},
    {key: '2', name: 'item2'},
    {key: '3', name: 'item3'},
    {key: '4', name: 'item4'},
    {key: '5', name: 'item5'},
    {key: '6', name: 'item6'},
    {key: '7', name: 'item7'},
    {key: '8', name: 'item8'},
    {key: '9', name: 'item9'},
    {key: '2', name: 'item10'},
  ]);
  const [refresh, setRefresh] = useState(false);
  const handleReFresh = () => {
    setRefresh(true);
    setList([...list, {key: 5, name: 'item 0'}]);
    setRefresh(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <Text style={styles.titleText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(e, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={handleReFresh} />
        }
      />
    </View>
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

export default ListArr;
