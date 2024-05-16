import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RText from '../../../components/RText';
import RTouchableOpacity from '../../../components/RTouchableOpacity';
import { useNavigation } from '@react-navigation/native';

const ResetSuccess = () => {
    const navigation = useNavigation();
    const handleLogin = ()=>{
        navigation.navigate('SignIn');
    }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.success}>
        <Image
          source={require('../../../assets/Images/reset_success.png')}
          style={styles.image}
          resizeMode="contain" // You can change the resizeMode as per your requirement
        />
        <RText
        fontSize='22'>Password Reset 
        </RText>
        <RText
        fontSize='10'
        color='gray'>
            Your password has been reset successfully
        </RText>

      </View>
      <RTouchableOpacity
      onPress={handleLogin}
      backgroundColor='black'>
        <RText
        color='white'
        >Go to sign in
        </RText>
      </RTouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetSuccess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  success: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap:4
  },
  image: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
  },
});
