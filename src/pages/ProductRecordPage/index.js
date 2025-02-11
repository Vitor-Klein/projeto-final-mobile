import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Box } from 'native-base';
import LottieView from 'lottie-react-native';
import supabaseService from '../../services/SupabaseService';
import styles from './styles';
import ImageSvg from '../../assets/bacgroundSvg.png';

export default function Report() {
  const navigation = useNavigation();
  const [consumedItems, setConsumedItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchConsumedItens();
  }, []);

  async function fetchConsumedItens() {
    try {
      let { data, error } = await supabase
        .from('produtoconsumido')  
        .select('*');  

      if (error) {
        throw new Error(error.message);
      }

      setConsumedItems(data); 
    } catch (error) {
      console.error('Erro ao buscar itens consumidos: ', error.message);
    }
  }

  async function handleRefresh() {
    setRefreshing(true);
    await fetchConsumedItens();
    setRefreshing(false);
  }

  function backToHome() {
    navigation.navigate('Home');
  }

  const renderEmptyList = () => (
    <View>
      <LottieView
        source={require('../../animations/EmptyList.json')}
        style={{ width: 350, height: 350 }}
        autoPlay
        loop
        speed={1}
      />
      <Text style={styles.title}>Nenhum produto consumido</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Box w={350} style={styles.itemContainer}>
      <Box w={320} justifyContent="space-between" flexDirection="row">
        <Text style={styles.itemName}>{item.itemname}</Text>
      </Box>
      <Text style={styles.itemDetails}>Quantidade consumida: {item.quantidadeconsumida}</Text>
      <Box w={320} justifyContent="space-between" flexDirection="row" marginTop={5}>
        <Text style={styles.itemVal}>Data: {new Date(item.dataconsumo).toLocaleDateString()}</Text>
      </Box>
    </Box>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0A2342', '#0D3C76']} style={styles.background}>
        <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
          <View style={styles.content}>
            <View style={styles.listContainer}>
              <FlatList
                data={consumedItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={renderEmptyList}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={['#0A2342']}
                    tintColor="#FFFDF7"
                  />
                }
              />
            </View>
  
            {/* Corrigindo o erro aqui com o uso de <View> ou <Fragment> */}
            <View style={styles.footer}>
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
