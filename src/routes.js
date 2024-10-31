import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Login from './pages/Login'
import OnBoarding from './pages/OnBoarding'
export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}