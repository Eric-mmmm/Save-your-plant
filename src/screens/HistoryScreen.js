import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HistoryScreen = () => {
  const history = {
    '01/04/2025': ['item 1'],
    '02/04/2025': ['item 2', 'item 3', 'item 4'],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History/report</Text>
      <Text style={styles.score}>Total score: 83/100</Text>
      
      <ScrollView style={styles.historyList}>
        {Object.entries(history).map(([date, items]) => (
          <View key={date} style={styles.dateGroup}>
            <Text style={styles.date}>{date}:</Text>
            {items.map((item, index) => (
              <Text key={index} style={styles.item}>- {item}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#8B7355',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  historyList: {
    flex: 1,
  },
  dateGroup: {
    marginBottom: 15,
  },
  date: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  item: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 20,
    marginTop: 5,
  },
});

export default HistoryScreen; 