import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🚀 Welcome to Monopoly prooject by anil nehe</Text>

      <Text style={styles.counter}>{count}</Text>

      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f6fa',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
    color: '#2c3e50',
  },
  counter: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e74c3c',
  },
});
