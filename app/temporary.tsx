import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, router } from 'expo-router';

export default function TemporaryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ 
        title: 'Product Analysis',
        headerStyle: { backgroundColor: '#fff' },
      }} />

      <View style={styles.scoreContainer}>
        <Text style={styles.productName}>Monster Energy Ultra Violet</Text>
        <Text style={styles.scoreText}>Environmental Impact Score</Text>
        <Text style={styles.score}>7/10</Text>
      </View>

      <View style={styles.evaluationContainer}>
        <Text style={styles.evaluationTitle}>Ingredient Analysis:</Text>
        
        <View style={styles.warningContainer}>
          <Text style={[styles.warningText, { color: '#FF4444' }]}>
            ⚠️ High Taurine (1000mg per serving)
          </Text>
          <Text style={styles.description}>
            • Synthetic taurine production requires high energy consumption{'\n'}
            • Chemical synthesis process generates harmful byproducts{'\n'}
            • Industrial production contributes to water pollution
          </Text>
        </View>

        <View style={styles.warningContainer}>
          <Text style={[styles.warningText, { color: '#FFB302' }]}>
            ⚠️ High Caffeine (160mg per can)
          </Text>
          <Text style={styles.description}>
            • Intensive water usage in caffeine extraction{'\n'}
            • Agricultural impact from caffeine sourcing{'\n'}
            • Processing requires significant energy input
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Recommendations:</Text>
          <Text style={styles.infoText}>
            Consider alternatives with natural caffeine sources and reduced taurine content for lower environmental impact.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back to Scanner</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scoreContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
    margin: 16,
    borderRadius: 12,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  evaluationContainer: {
    padding: 16,
  },
  evaluationTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  warningContainer: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  warningText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  infoContainer: {
    backgroundColor: '#E8F5E9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2E7D32',
  },
  infoText: {
    fontSize: 16,
    color: '#1B5E20',
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
}); 