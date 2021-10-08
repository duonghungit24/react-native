import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';

const Refresh = () => {
  const [name, setName] = useState('');
  const [submit, setSubmit] = useState(false);
  const [show, setShow] = useState(false);
  const onPressHandler = () => {
    if (name.length > 5) {
      setSubmit(!submit);
      if (submit) setName('');
    } else {
      setShow(true);
    }
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={show}
        transparent
        onRequestClose={() => setShow(false)}
        animationType="slide">
        <View style={styles.wrapModal}>
          <View style={styles.viewModal}>
            <View style={styles.warningModal}>
              <Text style={styles.titleText}>Warning</Text>
            </View>
            <Text style={styles.textModal}>
              số ký tự phải nhập lớn hơn 5 kí tự
            </Text>
            <Pressable onPress={() => setShow(false)} style={styles.btnModal}>
              <Text>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  wrapModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  viewModal: {
    width: 300,
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  textModal: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  btnModal: {
    width: 35,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    marginBottom: 10,
  },
  warningModal: {
    width: '100%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
});
export default Refresh;
