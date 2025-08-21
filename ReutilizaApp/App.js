import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && <div style={{ width: '100%', height: '100%' }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cor branca
  },
});