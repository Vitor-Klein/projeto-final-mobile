
import React, { useRef } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';

import CheckListAnimation from '../../animations/CheckList.json'
import styles from './styles'

export default function Home() {
  const navigation = useNavigation();
  const animation = useRef < LottieView > (null);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A2342', '#0D3C76']}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>HomeList</Text>
          <Text style={styles.subTitle}>O que gostaria de fazer?</Text>
          {/* 
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#eee',
            }}
            source={CheckListAnimation}
          /> */}
        </View>

      </LinearGradient>

    </View>
  )
}
