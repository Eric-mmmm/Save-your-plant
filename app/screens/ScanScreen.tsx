import React, { useCallback, useMemo, useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import BottomSheet from '@gorhom/bottom-sheet';
import { Camera, CameraType } from 'expo-camera';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const cameraRef = useRef<Camera>(null);
  const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);

  const historyData = [
    { date: '01/04/2025', items: ['Monster Energy', 'Coca Cola', 'Sprite'] },
    { date: '02/04/2025', items: ['Pepsi', 'Fanta', 'Red Bull'] },
    { date: '03/04/2025', items: ['Dr Pepper', 'Mountain Dew'] },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Scan' }} />
        <Text style={styles.buttonText}>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: 'Scan',
          headerTransparent: true,
          headerStyle: { backgroundColor: 'transparent' },
          headerTintColor: '#fff'
        }} 
      />
      
      <Camera 
        ref={cameraRef}
        style={styles.camera} 
        type={CameraType.back}
      >
        <View style={styles.overlay}>
          <View style={styles.scanArea} />
        </View>
      </Camera>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicator}
        enablePanDownToClose={false}
      >
        <ScrollView
          style={styles.historyContainer}
          onScrollBeginDrag={() => bottomSheetRef.current?.snapToIndex(2)}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={true}
          bounces={false}
        >
          <Text style={styles.historyTitle}>Recent Scans</Text>
          {historyData.map((day, index) => (
            <View key={index} style={styles.daySection}>
              <Text style={styles.dateText}>{day.date}</Text>
              {day.items.map((item, i) => (
                <Text key={i} style={styles.itemText}>• {item}</Text>
              ))}
            </View>
          ))}
        </ScrollView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  handleStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  handleIndicator: {
    backgroundColor: '#DDDDDD',
    width: 40,
    height: 4,
    borderRadius: 2,
  },
  historyContainer: {
    flex: 1,
    padding: 16,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  daySection: {
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 3,
    color: '#666',
  }
});
