import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

const STORAGE_KEY = '@toDos';

export default function App() {
  const [work, setWork] = useState(false);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const onChangeText = (pyaload) => setText(pyaload);
  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave))
  };
  const doneToDo = async (key) => {
    const updateToDo = {...toDos}
    updateToDo[key].working = !updateToDo[key].working;
    setToDos(updateToDo);
    await saveToDos(updateToDo);
  };

  const deleteToDos = async (key) => {
    const newToDos = { ...toDos }
    delete newToDos[key]
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s));
  };

  useEffect(() => {
    loadToDos();
  }, []);

  const addToDo = async () => {
    if (text === "") {
      return
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working: work }
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

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
        <TextInput
          autoCorrect
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          value={text}
          style={styles.list}
          editable={work ? false : true}
          placeholder={work ? "make your life better" : "Start your life"}
          placeholderTextColor={'gray'}
          returnKeyType="done" />
      </View>
      {Object.keys(toDos).length == 0 ?
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Loading...</Text>
          <ActivityIndicator color="white" size='large' />
        </View>
        :
        <ScrollView
          contentContainerStyle={styles.toDo}
        >
          {Object.keys(toDos).map(key =>
            toDos[key].working === work ? (
              <TouchableOpacity key={key} onPress={() => doneToDo(key)}>
                <View style={styles.toDos}>
                  <Text style={styles.info}>{toDos[key].text}</Text>
                  <TouchableOpacity onPress={() => deleteToDos(key)}>
                    <Text style={styles.del}>
                      <Feather style={styles.icon} name="trash-2" size={24} color="black" />
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ) : null
          )}
        </ScrollView>
      }
    </View >
  );
}