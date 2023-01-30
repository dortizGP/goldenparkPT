import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator,Text,StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewScreen from './src/screens/WebViewScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency';

const App = () => {
  const [isLoaded, setLoaded] = useState(false);
  var cont = 0;
  
  useEffect(() => { 
    (async () => {
      setTimeout(async () => {
        const { status } = await requestTrackingPermissionsAsync();
        if (status || status === 'granted') {
          console.log('Yay! I have user permission to track data');
        }  
      }, 500);
    })();
  }, []);

  return (
    isLoaded ?
    <SafeAreaProvider>
      <WebViewScreen />
    </SafeAreaProvider>
      :
      <View style={styles.container}>
        <View style={{ height: 0, width: 0 }}>
          <WebView
            source={{ uri: "https://www.goldenpark.es" }}
            onLoad={setLoaded(true)}
          />
        </View>
        <ActivityIndicator size="large" color="#E60881" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;