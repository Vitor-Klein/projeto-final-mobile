import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import OnBoarding from './pages/OnBoarding'
import Home from './pages/Home'
import List from './pages/List'
import CreateItem from './pages/CreateItem'
import ProductRecordPage from './pages/ProductRecordPage'

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="OnBoarding" component={OnBoarding} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="CreateItem" component={CreateItem} />
        <AppStack.Screen name="ProductRecordPage" component={ProductRecordPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}