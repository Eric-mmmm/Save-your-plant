import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import { CameraView } from 'expo-camera';
import { useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function ScanScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [cameraRef, setCameraRef] = useState<CameraView | null>(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    if (!scanned && isCameraReady) {
      timeoutRef.current = setTimeout(() => {
        console.log("No barcode detected, using Gemini...");
        captureImage();
      }, 5000);

      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }
  }, [scanned, isCameraReady]);

/*
  const captureImage = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync({ base64: true });
      if (!photo?.base64) {
        throw new Error('Failed to capture image');
      }
      const response = await axios.post("http://localhost:3000/gemini", {
        image: photo.base64,
      });
      console.log(response.data);
    }
  }; */

  const captureImage = async () => {
    console.log('captureImage called, cameraRef:', cameraRef);
    if (cameraRef && isCameraReady) {
      try {
        const photo = await cameraRef.takePictureAsync({ base64: true });
        console.log('Photo captured:', photo ? 'success' : 'failed');
        if (!photo?.base64) {
          throw new Error('Failed to capture image');
        }
    
        console.log('Sending image to backend...');
        const response = await axios.post("http://localhost:3000/gemini", {
          image: photo.base64,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Backend response:', response.data);
    
        Alert.alert("Gemini AI Result", response.data.result || "No result from Gemini");
        setScanned(true);
      } catch (error: any) {
        console.error('Error in captureImage:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        }
        Alert.alert("Error", "Gemini analysis failed: " + error.message);
      }
    } else {
      console.log('cameraRef is null or not ready');
    }
  };

  const handleBarcodeScanned = async (result: BarcodeScanningResult) => {
    if (scanned) return;
    
    if (result.data) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel Gemini fallback
      setScanned(true);
      Alert.alert('Barcode Scanned', `Value: ${result.data}`);
    }
    
  }; 

  

  
  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No access to camera</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Camera Section */}
      <View style={styles.cameraContainer}>
        <CameraView
          ref={setCameraRef}
          style={styles.camera}
          facing="back"
          barcodeScannerSettings={{
            barcodeTypes: ['qr', 'ean13', 'code128', 'upc_a', 'upc_e'],
          }}
          onBarcodeScanned={handleBarcodeScanned}
          onCameraReady={() => setIsCameraReady(true)}
        >
          <View style={styles.overlay}>
            <View style={styles.scanArea} />
          </View>
        </CameraView>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.halfButton]} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.halfButton, { backgroundColor: '#4CAF50' }]} 
            onPress={() => router.push('/history')}
          >
            <Text style={styles.buttonText}>View History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  cameraContainer: {
    flex: 1,
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
  bottomSection: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfButton: {
    width: '48%',
  },
});