import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

interface HistoryItem {
  date: string;
  items: string[];
}

interface HistoryViewProps {
  isExpanded: boolean;
  data: HistoryItem[];
}

export default function HistoryView({ isExpanded, data }: HistoryViewProps) {
  if (!isExpanded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {data.map((dayData, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dateText}>{dayData.date}</Text>
          {dayData.items.map((item, itemIndex) => (
            <Text key={itemIndex} style={styles.itemText}>• {item}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  dayContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 14,
    marginLeft: 8,
    marginVertical: 2,
  },
}); 