import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Input, Icon, Fab, Box, DeleteIcon, Modal, Button, VStack } from 'native-base';
import MaterialIcons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

import LottieView from 'lottie-react-native';
import supabaseService from '../../services/SupabaseService';
import styles from './styles';
import ImageSvg from '../../assets/bacgroundSvg.png';

export default function Report() {
  const navigation = useNavigation();
  const [consumedItems, setConsumedItems] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [filteredItens, setFilteredItens] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    fetchConsumedItens();
  }, []);

  useEffect(() => {
    const filtered = consumedItems.filter((consumedItem) =>
      consumedItem.itemname.toLowerCase().includes(searchText.toLowerCase()) &&
      new Date(consumedItem.dataconsumo).toDateString() === selectedDate.toDateString()
    );
    setFilteredItens(filtered);
  }, [searchText, consumedItems, selectedDate]);

  async function fetchConsumedItens() {
    try {
      const data = await supabaseService.fetchConsumedItens();
      setConsumedItems(data);
      setFilteredItens(data);
    } catch (error) {
      console.error('Erro ao buscar itens: ', error);
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

  const onChangeDate = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const renderEmptyList = () => (
    <View style={styles.emptyListContainer}>
      <LottieView
        source={require('../../animations/EmptyList.json')}
        style={{ width: 350, height: 350 }}
        autoPlay
        loop
        speed={1}
      />
      <Text style={styles.title}>Nenhum produto consumido nessa data</Text>
    </View>
  );

  const renderItem = ({ item: consumedItem }) => (
    <Box w={350} style={styles.itemContainer}>
      <Box w={320} justifyContent="space-between" flexDirection="row">
        <Text style={styles.itemName}>{consumedItem.itemname}</Text>
      </Box>
      <Text style={styles.itemDetails}>Quantidade consumida: {consumedItem.quantidadeconsumida}</Text>
      <Box w={320} justifyContent="space-between" flexDirection="row" marginTop={5}>
        <Text style={styles.itemVal}>Data do consumo: {new Date(consumedItem.dataconsumo).toLocaleDateString()}</Text>
      </Box>
    </Box>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0A2342', '#0D3C76']} style={styles.background}>
        <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
          <View style={styles.content}>
            <Input
              InputRightElement={
                <Icon as={<MaterialIcons name="search" />} size={5} ml="2" margin="1.5" color="#0A2342" />
              }
              style={styles.serchInput}
              size="lg"
              width="5/6"
              marginTop="12"
              backgroundColor="#FFFDF7"
              placeholder="Pesquisar"
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
              <Text style={styles.datePickerText}>Selecionar Data: {selectedDate.toLocaleDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}
            <View style={styles.listContainer}>
              <FlatList
                data={filteredItens}
                renderItem={renderItem}
                keyExtractor={(consumedItem) => consumedItem.id.toString()}
                ListEmptyComponent={renderEmptyList}
                contentContainerStyle={styles.flatListContent}
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
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => backToHome()} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Voltar para Home</Text>
              </TouchableOpacity>
            </View>
          </View >
        </ImageBackground >
      </LinearGradient >
    </View >
  );
}