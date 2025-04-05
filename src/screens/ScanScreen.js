import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import HistoryDrawer from '../components/HistoryDrawer';

const ScanScreen = () => {
  const [scannedItem, setScannedItem] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        {/* Camera view placeholder */}
        <View style={styles.cameraView} />
      </View>
      
      {scannedItem && (
        <View style={styles.itemInfo}>
          <Image 
            source={require('../assets/monster-energy.png')} 
            style={styles.itemImage}
          />
          <Text style={styles.scoreText}>6/10</Text>
          
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.buttonText}>New scan</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      <HistoryDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scannerContainer: {
    flex: 1,
    margin: 20,
  },
  cameraView: {
    flex: 1,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  itemInfo: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#6B8E23',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScanScreen; 