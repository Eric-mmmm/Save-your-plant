import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Temporary mock data
const mockHistory = [
  {
    date: '01/04/2025',
    items: ['Monster Energy Drink'],
  },
  {
    date: '02/04/2025',
    items: ['Organic Apples', 'Recycled Paper', 'Eco-friendly Detergent'],
  },
];

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Weekly Report</Text>
      
      {/* Overall Score */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreTitle}>Overall Score</Text>
        <Text style={styles.scoreValue}>83/100</Text>
      </View>

      {/* Daily Breakdown */}
      <ScrollView style={styles.historyContainer}>
        {mockHistory.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.date}>{day.date}</Text>
            {day.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.itemContainer}>
                <Text style={styles.itemText}>• {item}</Text>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigationContainer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.homeButton}>
            <Text style={styles.buttonText}>Home</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2E7D32',
  },
  scoreContainer: {
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  scoreTitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  historyContainer: {
    flex: 1,
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 15,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#666',
  },
  navigationContainer: {
    marginTop: 20,
  },
  homeButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 