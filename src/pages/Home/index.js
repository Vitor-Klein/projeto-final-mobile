import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import LottieView from 'lottie-react-native';


export default function Home() {
  const animation = useRef(null);
  const navigation = useNavigation();

  function backToOnBoarding() {
    navigation.navigate("OnBoarding")
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A2342', '#0D3C76']}
        style={styles.background}
      >
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
            {/* Botões */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Lista de Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Gerar Relatório Baixo Estoque</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Gerar Relatório De Gastos</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity onPress={() => backToOnBoarding()} style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Voltar ao Onboarding</Text>
          </TouchableOpacity>


        </View>

      </LinearGradient>

    </View>
  );
}
