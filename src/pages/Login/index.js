import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

import styles from './styles'

import LogoImg from '../../assets/HomeTidyLogo.png'

export default function Detail() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={LogoImg} />
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
    </View>
  )
}