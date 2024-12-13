import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import { Input, Icon } from 'native-base'
import MaterialIcons from '@expo/vector-icons/Ionicons'
import styles from './styles';
import ImageSvg from '../../assets/bacgroundSvg.png'
import LottieView from 'lottie-react-native';


export default function List() {
  const navigation = useNavigation();

  function backToHome() {
    navigation.navigate("Home")
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0A2342', '#0D3C76']}
        style={styles.background}
      >
        <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
          <View style={styles.content}>
            <Input
              InputRightElement={
                <Icon as={<MaterialIcons name="search" />}
                  size={5}
                  ml="2"
                  margin='1.5'
                  color="#0A2342" />}
              style={styles.serchInput}
              size='lg'
              width='5/6'
              marginTop='12'
              backgroundColor='#FFFDF7'
            />

            <View style={styles.listContainer}>
              <View>
                <LottieView
                  source={require("../../animations/EmptyList.json")}
                  style={{ width: 350, height: 350 }}
                  autoPlay
                  loop
                  speed={1}
                />
                <Text style={styles.title}>Lista Vazia</Text>
              </View>


              <TouchableOpacity onPress={() => backToHome()} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Voltar para Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>

    </View>
  );
}
