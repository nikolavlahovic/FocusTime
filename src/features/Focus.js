import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label={'Focus on?'}
          value={subject}
          onChangeText={(value) => {
            setSubject(value);
          }}
        />
        <View style={styles.button}>
          <RoundedButton
            size={55}
            title={'+'}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button:{
    alignItems: "center"
  }
});
