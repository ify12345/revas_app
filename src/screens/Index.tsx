import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  RootStackParamList,
} from '~types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DashBoard, Search, Deals, Message, Profile} from '~screens/Tab/index';
import {
  ChatBubbleBottomCenterIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'react-native-heroicons/solid';

import {useIsFocused} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '~redux/store';
import credentials from '~utils/keychain';
import {getUser} from '~api/auth';

// auth screens
import {logout} from '~redux/reducers/auth';

import SignIn from './onboarding/SignIn';
import SignUp from './onboarding/SignUp';
import Home from './onboarding/Home';
import Verification from './onboarding/Verification';
import {SellerProfileSetup} from './Seller/SellerProfileSetup';
import {OnboardingScreen} from './onboarding/OnboardingScreen';

// authenticated screens



const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


// const tabBarStyle = {
//   padding: 20,
//   height: 90,
//   position: 'absolute',
//   bottom: 0,
//   width,
// };

function BottomTab() {
  const isFocused = useIsFocused();
  return (
    <Tab.Navigator initialRouteName="DashBoard">
      <Tab.Screen
        name="DashBoard"
        component={DashBoard}
        options={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            color: isFocused ? 'black' : 'gray', // Change color based on focus state
          },
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? <HomeIcon size={24} color="#000" /> : <HomeIcon size={24} color="gray" />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? 'black' : 'gray', // Change color based on focus state
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <MagnifyingGlassIcon size={24} color="#000" />
            ) : (
              <MagnifyingGlassIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? 'black' : 'gray', // Change color based on focus state
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <ShoppingBagIcon size={24} color="#000" />
            ) : (
              <ShoppingBagIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? 'black' : 'gray', // Change color based on focus state
          },
          tabBarIcon: ({focused}) =>
            focused ? (
              <ChatBubbleBottomCenterIcon size={24} color="#000" />
            ) : (
              <ChatBubbleBottomCenterIcon size={24} color="gray" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: true,
          headerShown: false,
          tabBarLabelStyle: {
            color: isFocused ? 'black' : 'gray', // Change color based on focus state
          },
          tabBarIcon: ({focused}) =>
            focused ? <UserIcon size={24} color="#000" /> : <UserIcon size={24} color="gray" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Screens() {
  const [loading, setLoading] = useState(true);
  const {isAuthenticated, isEmailVerified} = useAppSelector(store => store.auth);

  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      const checkCredential = await credentials();
      if (!checkCredential) {
        setLoading(false);
        dispatch(logout());
      }
    })();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser())
        .unwrap()
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          dispatch(logout());
        });
    } else {
      setLoading(false);
      dispatch(logout());
    }
  }, [isAuthenticated]);

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuthenticated && (
        <Stack.Group>
          <Stack.Screen name="Onboard" component={OnboardingScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignupOne" component={SignUp} />
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="Verification"
            component={Verification}
          />
          {/* <Stack.Screen name="SignupTwo" component={SignupTwoScreen} /> */}
        </Stack.Group>
      )}
      {isAuthenticated && !isEmailVerified && (
        <Stack.Group>
        
          <Stack.Screen
            options={{gestureEnabled: false}}
            name="SetUpAccount"
            component={SellerProfileSetup}
          />
        </Stack.Group>
      )}
      {isAuthenticated && isEmailVerified && (
        <Stack.Screen name="BottomTab" component={BottomTab} />
      )}
    </Stack.Navigator>
  );
}
