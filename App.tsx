import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import {  StatusBar } from 'react-native';

import { PaperProvider } from 'react-native-paper';
import {useFonts} from 'expo-font';
import {Provider} from 'react-redux'

import {PersistGate} from 'redux-persist/integration/react'
import store, { persistor } from '~redux/store';
import Toast from 'react-native-toast-message'




import toastConfig from '~utils/toast';
import Screens from '~screens/Index';



SplashScreen.preventAutoHideAsync();



export default function App() {

  

  const [fontsLoaded] = useFonts({
    'GeneralSans': require("~assets/fonts/GeneralSans-Regular.ttf"),
    'GeneralSansMedium': require("~assets/fonts/GeneralSans-Medium.ttf"),
    'GeneralSansSemibold': require("~assets/fonts/GeneralSans-Semibold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async() => {
        await SplashScreen.hideAsync()
      }, 3000)
    }
  }, [fontsLoaded])




  function ThemedApp() {
   
    
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaProvider>
            <NavigationContainer
      
              onReady={onLayoutRootView}
            >
              <StatusBar
                backgroundColor='white'
                barStyle="dark-content"
              />
              <Screens />
              <Toast config={toastConfig} />
            </NavigationContainer>
          </SafeAreaProvider>
        </PaperProvider>
        </PersistGate>
      </Provider>
    )
  }

  return (
    <ThemedApp />
  );
}
