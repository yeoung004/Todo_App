import React, { useState } from 'react';
import { StatusBar ,Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';

export default function App() {
  const [work, setWork] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.mode}>
        <TouchableOpacity onPress={() => setWork(!work)}>
          <Text style={work ? styles.modeTextOn : styles.modeText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setWork(!work)}>
          <Text style={work ? styles.modeText : styles.modeTextOn}>Work</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lists}>
        <TextInput multiline autoCorrect style={styles.list} placeholder={"Start your life"} placeholderTextColor={'gray'}/>
      </View>
    </View>
  );
}