import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Refresh = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mời bạn nhập họ và tên</Text>
      <TextInput
        style={styles.textInput}
        placeholder="nhap ho va ten"
        onChangeText={value => setName(value)}
        keyboardType="numeric"
        maxLength={2}
      />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    color: 'red',
    fontSize: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    width: 200,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
export default Refresh;
