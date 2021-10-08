import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';

const Refresh = () => {
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const onPressHandler = () => {
    if (name.length > 5) {
      setSubmit(!submit);
    } else {
      Alert.alert(
        'warning',
        'phải nhập trên 10 kí tự',
        [
          {text: 'dont show it', onPress: () => console.warn('dont show')},
          {text: 'cancle', onPress: () => console.warn('cancle')},
        ],
        {cancelable: true},
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Mời bạn nhập họ và tên</Text>
      <TextInput
        style={styles.textInput}
        placeholder="nhap ho va ten"
        onChangeText={value => setName(value)}
        keyboardType="ascii-capable"
      />
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => [
          styles.btn,
          {backgroundColor: pressed ? 'red' : 'green'},
        ]}>
        <Text style={styles.text}>{submit ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      <Text>{submit ? name : ''}</Text>
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
  btn: {
    width: 150,
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
export default Refresh;
