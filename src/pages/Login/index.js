import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

import styles from './styles'

import LogoImg from '../../assets/loginImage.png'

export default function Detail() {
  return (
    <View style={styles.backgoundContainer}>
      <Image style={styles.image} source={LogoImg} />

      <View style={styles.container}>
        <Text style={styles.title}>Faça seu login</Text>

        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={""}
              placeholder='E-mail'
              placeholderTextColor="#2CA58D"
            />

            <TextInput
              style={styles.input}
              value={""}
              placeholder='Senha'
              placeholderTextColor="#2CA58D"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => { }}>
            <Text style={styles.enterButton}>Entre</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
        </SafeAreaView>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>
            Não tem conta?
          </Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerTextGreen}>Registre-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View >

  )
}