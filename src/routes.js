import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import OnBoarding from './pages/OnBoarding'
import Home from './pages/Home'
import List from './pages/List'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="List" component={List} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}