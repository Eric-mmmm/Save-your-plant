import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>GROW YOUR PLANT</Text>
      
      {/* Plant Visualization */}
      <View style={styles.plantContainer}>
        <Image 
          source={require('../assets/images/plant.png')} 
          style={styles.plantImage}
          resizeMode="contain"
        />
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Link href="/scan" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SCAN ITEM</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/history" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>WEEKLY REPORT</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2E7D32',
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
  buttonContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 