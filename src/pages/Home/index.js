import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';

import styles from './styles';
import LottieView from 'lottie-react-native';

import ImageSvg from '../../assets/bacgroundSvg.png'

export default function Home() {
  const navigation = useNavigation();

  function backToOnBoarding() {
    navigation.navigate("OnBoarding")
  }

  function navigateToList() {
    navigation.navigate("List")
  }
  function navigateToProductRecordPage() {
    navigation.navigate("ProductRecordPage")
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A2342', '#0D3C76']}
        style={styles.background}
      >
        <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
          <View style={styles.content}>
            <Text style={styles.title}>Home List</Text>
            <Text style={styles.subTitle}>O que gostaria de fazer?</Text>

            <LottieView
              source={require("../../animations/CheckList.json")}
              style={{ width: 350, height: 350 }}
              autoPlay
              loop
              speed={2}
            />
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => navigateToList()} style={styles.button}>
                <Text style={styles.buttonText}>Ver Lista de Produtos</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={navigateToProductRecordPage} style={styles.button}>
                <Text style={styles.buttonText}>Gerar Relatório De Gastos</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => backToOnBoarding()} style={styles.footerButton}>
              <Text style={styles.footerButtonText}>Voltar ao Onboarding</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>

      </LinearGradient>
    </View>
  );
}
