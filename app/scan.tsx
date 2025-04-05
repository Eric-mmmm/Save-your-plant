import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function ScanScreen() {
  const [scannedItem, setScannedItem] = useState(null);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const onGestureEvent = (event) => {
    translateY.value = withSpring(event.translationY, {
      damping: 20,
      stiffness: 90,
    });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      
      {/* Top Section - Camera View */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraPlaceholder}>
          <Text style={styles.cameraText}>Camera View</Text>
        </View>
      </View>

      {/* Middle Section - Item Info */}
      {scannedItem && (
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemName}>Monster Energy Drink</Text>
          <Text style={styles.itemScore}>Environmental Score: 6/10</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Bottom Drawer */}
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.drawer, animatedStyle]}>
          <View style={styles.drawerHandle} />
          <Text style={styles.drawerTitle}>History</Text>
          <Link href="/history" asChild>
            <TouchableOpacity style={styles.historyButton}>
              <Text style={styles.buttonText}>View Full History</Text>
            </TouchableOpacity>
          </Link>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraContainer: {
    height: '50%',
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraText: {
    fontSize: 18,
    color: '#666',
  },
  itemInfoContainer: {
    padding: 20,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemScore: {
    fontSize: 18,
    color: '#2E7D32',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  infoButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  drawerHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
}); 