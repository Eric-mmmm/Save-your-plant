import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, router, useLocalSearchParams } from 'expo-router';

export default function TemporaryScreen() {
  const { image, title, brand, nutrition, source } = useLocalSearchParams();

  // Using the sample product data
  const productTitle = "Starbucks Mocha Frappuccino";
  const productSubtitle = "405mL Bottle";
  const productBrand = "Starbucks";
  const productNutrition = "Energy 64.1975 kcal, Fat 1.1111 g, Saturated Fat 0.7407 g, Carbohydrates 11.6049 g, Sugars 11.1111 g, Fiber 0.2469 g, Protein 2.2222 g, Salt 0.08641975 g.";

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ 
        title: 'Product Details',
        headerStyle: { backgroundColor: '#0D0D0D' },
        headerTintColor: '#4ECCA3',
        headerTitleStyle: { color: '#FFFFFF' }
      }} />
      
      <ScrollView 
        style={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={styles.scrollViewContent}
        alwaysBounceVertical={false}
      >
        <View style={styles.topContent}>
          <Image 
            source={{ uri: `data:image/jpeg;base64,${image}` }}
            style={styles.image}
          />
          
          <View style={styles.content}>
            <Text style={styles.title}>{productTitle}</Text>
            <Text style={styles.subtitle}>{productSubtitle}</Text>
            <Text style={styles.brand}>{productBrand}</Text>

            <View style={styles.scoreContainer}>
              <Text style={styles.score}>7/10</Text>
              <Text style={styles.scoreText}>Environmental Impact</Text>
            </View>
            
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>
                • Recyclable glass packaging{'\n'}
                • Contains dairy products{'\n'}
                • Moderate transport impact
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Nutrition Facts</Text>
              <Text style={styles.nutrition}>{productNutrition}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomSpacing} />
      </ScrollView>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>Back to Scanner</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    backgroundColor: '#1A1A1A',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(78, 204, 163, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    color: '#A0A0A0',
    marginBottom: 8,
    textAlign: 'center',
  },
  brand: {
    fontSize: 18,
    color: '#A0A0A0',
    marginBottom: 24,
    textAlign: 'center',
  },
  scoreContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1A1A1A',
    margin: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    shadowColor: '#4ECCA3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  scoreText: {
    fontSize: 18,
    color: '#A0A0A0',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4ECCA3',
    marginBottom: 8,
    textShadowColor: 'rgba(78, 204, 163, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  infoContainer: {
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  infoText: {
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 32,
  },
  section: {
    marginTop: 16,
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  nutrition: {
    fontSize: 16,
    lineHeight: 24,
    color: '#A0A0A0',
  },
  backButton: {
    backgroundColor: '#4ECCA3',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    margin: 16,
    shadowColor: '#4ECCA3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  topContent: {
    flexGrow: 0,
  },
  bottomSpacing: {
    height: 100,
  },
}); 