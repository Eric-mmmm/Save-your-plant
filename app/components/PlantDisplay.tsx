import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';

interface PlantDisplayProps {
  imageSource: any;
  scoreRange: string;
}

export function PlantDisplay({ imageSource, scoreRange }: PlantDisplayProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score Range: {scoreRange}</Text>
      <View style={styles.plantContainer}>
        <Image 
          source={imageSource}
          style={styles.plantImage}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  plantContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  plantImage: {
    width: 200,
    height: 200,
  },
  backButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 