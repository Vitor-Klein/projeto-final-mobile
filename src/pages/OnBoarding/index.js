
import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Onboarding
        pages={[
          {
            backgroundColor: '#0D3C76',
            image: <Image
              style={styles.stepImage}
              source={require('../../assets/Logo.png')} />,
            title: 'Bem vindo ao HomeTidy',
            subtitle: 'Seu app de gestão para inventarios domesticos personalizado',
            titleStyles: { fontSize: 40, fontWeight: 'bold' },
            subTitleStyles: { fontSize: 20 }
          },
          {
            backgroundColor: '#2CA58D',
            image: <Image
              style={styles.stepImage}
              source={require('../../assets/step2Image.png')} />,
            title: 'Listas interativas e super dinamicas',
            subtitle: 'Crie listas de compras, tarefas e muito mais',
            titleStyles: { fontSize: 40, fontWeight: 'bold' },
            subTitleStyles: { fontSize: 20 }
          },
        ]}
        bottomBarColor='#ffffff00 '
        onSkip={() => navigation.navigate('Login')}
        onDone={() => navigation.navigate('Login')}
      />
    </View>
  )
}
