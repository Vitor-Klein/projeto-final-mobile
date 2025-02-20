import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const OnBoarding = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const steps = [
    {
      title: 'Bem vindo ao HomeList',
      subtitle: 'Seu app de gestão para inventários domésticos personalizado',
      image: require('../../assets/Logo.png'),
      backgroundColor: '#679436',
    },
    {
      title: 'Listas interativas e super dinâmicas',
      subtitle: 'Gerencie itens em estoque, tarefas e muito mais',
      image: require('../../assets/step2Image.png'),
      backgroundColor: '#064789',
    },
  ];

  const changeStep = (newStep) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentStep(newStep);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      changeStep(currentStep + 1);
    } else {
      navigation.navigate('Home');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      changeStep(currentStep - 1);
    }
  };

  const skip = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: steps[currentStep].backgroundColor }]}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image source={steps[currentStep].image} style={styles.image} />
        <Text style={styles.title}>{steps[currentStep].title}</Text>
        <Text style={styles.subtitle}>{steps[currentStep].subtitle}</Text>
      </Animated.View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={skip}>
          <Text style={styles.skipButton}>Pular</Text>
        </TouchableOpacity>

        <View style={styles.stepsIndicator}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[styles.step, index === currentStep && styles.activeStep]}
            />
          ))}
        </View>

        <View style={styles.navigationButtons}>
          {currentStep > 0 && (
            <TouchableOpacity onPress={prevStep}>
              <Text style={styles.nextButton}>Voltar</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={nextStep}>
            <Text style={styles.nextButton}>
              {currentStep === steps.length - 1 ? 'Começar' : 'Próximo'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;