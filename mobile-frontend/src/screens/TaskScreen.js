import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TaskScreen() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = await AsyncStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/api/tasks', { headers: { Authorization: `Bearer ${token}` } });
    setTasks(response.data);
  };

  const createTask = async () => {
    const token = await AsyncStorage.getItem('token');
    await axios.post('http://localhost:5000/api/tasks', { title, description, deadline, priority }, { headers: { Authorization: `Bearer ${token}` } });
    fetchTasks();
  };

  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Title" />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Description" />
      <TextInput style={styles.input} value={deadline} onChangeText={setDeadline} placeholder="Deadline" />
      <TextInput style={styles.input} value={priority} onChangeText={setPriority} placeholder="Priority" />
      <Button title="Add Task" onPress={createTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.deadline}</Text>
            <Text>{item.priority}</Text>
            <Button title="Complete" />
            <Button title="Delete" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});