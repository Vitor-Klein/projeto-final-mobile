
import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';

import styles from './styles'

import ImageSvg from '../../assets/bacgroundSvg.png'

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
        <Onboarding
          pages={[
            {
              backgroundColor: '#ffffff00',
              image: <Image
                style={styles.stepImage}
                source={require('../../assets/Logo.png')} />,
              title: 'Bem vindo ao HomeList',
              subtitle: 'Seu app de gestão para inventarios domesticos personalizado',
              titleStyles: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', width: 400, color: "#FFFDF7" },
              subTitleStyles: { fontSize: 20, textAlign: 'center', width: 400, color: "#FFFDF7" },
            },
            {
              backgroundColor: '#84BC9Caa',
              image: <Image
                style={styles.stepImage}
                source={require('../../assets/step2Image.png')} />,
              title: 'Listas interativas e super dinamicas',
              subtitle: 'Gerencie itens em estoque, tarefas e muito mais',
              titleStyles: { fontSize: 40, fontWeight: 'bold', color: "#FFFDF7" },
              subTitleStyles: { fontSize: 20, color: "#FFFDF7" }
            },
          ]}
          bottomBarColor='#fff '
          onSkip={() => navigation.navigate('Home')}
          onDone={() => navigation.navigate('Home')}
        />
      </ImageBackground>
    </View>
  )
}
