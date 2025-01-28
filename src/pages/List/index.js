import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Input, Icon, Fab, Box, DeleteIcon, Modal, Button, VStack } from 'native-base';
import MaterialIcons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import ImageSvg from '../../assets/bacgroundSvg.png';
import LottieView from 'lottie-react-native';

import supabaseService from '../../services/SupabaseService';

export default function List() {
  const navigation = useNavigation();
  const [itens, setItens] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredItens, setFilteredItens] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    const filtered = itens.filter((item) =>
      item.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      item.categoria.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItens(filtered);
  }, [searchText, itens]);

  async function fetchItems() {
    try {
      const data = await supabaseService.getItems();
      setItens(data);
      setFilteredItens(data);
    } catch (error) {
      console.error('Erro ao buscar itens: ', error);
    }
  }

  async function handleRefresh() {
    setRefreshing(true);
    await fetchItems();
    setRefreshing(false);
  }

  function backToHome() {
    navigation.navigate('Home');
  }

  function goToCreate() {
    navigation.navigate('CreateItem');
  }

  function handleDelete(item) {
    setSelectedItem(item);
    setShowModalDelete(true);
  }

  async function confirmDelete() {
    if (selectedItem) {
      try {
        const updatedItem = { ...selectedItem, quantidade: selectedItem.quantidade - 1 };
        await supabaseService.updateItemQuantity(selectedItem.id, updatedItem.quantidade);
        await fetchItems();
        setShowModalDelete(false);
      } catch (error) {
        console.error('Erro ao deletar unidade: ', error);
      }
    }
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
      <Text style={styles.title}>Lista Vazia</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Box w={350} style={styles.itemContainer}>
      <Box w={320} justifyContent="space-between" flexDirection="row">
        <Text style={styles.itemName}>{item.nome}</Text>
        <TouchableOpacity onPress={() => handleDelete(item)}>
          <DeleteIcon color="danger.400" size="xl" />
        </TouchableOpacity>
      </Box>
      <Text style={styles.itemDetails}>{item.categoria}</Text>
      <Box w={320} justifyContent="space-between" flexDirection="row" marginTop={5}>
        <Text style={styles.itemVal}>Val: {new Date(item.datavalidade).toLocaleDateString()}</Text>
        <Text style={styles.itemUnity}>{item.quantidade}Un</Text>
      </Box>
    </Box>
  );

  return (
    <>
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

              <View style={styles.listContainer}>
                <FlatList
                  data={filteredItens}
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

                <Fab
                  renderInPortal={false}
                  shadow={2}
                  right={8}
                  style={styles.fab}
                  bottom={20}
                  onPress={() => goToCreate()}
                  size="lg"
                  icon={<Icon color="white" as={<MaterialIcons name="add" />} name="plus" size="2xl" />}
                />

                <TouchableOpacity onPress={() => backToHome()} style={styles.footerButton}>
                  <Text style={styles.footerButtonText}>Voltar para Home</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </LinearGradient>

        <Modal isOpen={showModalDelete} onClose={() => setShowModalDelete(false)}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Confirmar Exclusão</Modal.Header>
            <Modal.Body>
              <Text>Deseja excluir uma unidade de "{selectedItem?.nome}"?</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group>
                <Button onPress={() => setShowModalDelete(false)}>Cancelar</Button>
                <Button colorScheme="danger" onPress={confirmDelete}>
                  Deletar
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </>
  );
}
