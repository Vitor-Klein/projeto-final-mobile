import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { FormControl, Input, HStack, Select } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

import supabaseService from '../../services/SupabaseService';
import styles from './styles';
import ImageSvg from '../../assets/bacgroundSvg.png';

export default function CreateItem() {
  const navigation = useNavigation();
  const [Nome, setNome] = useState('');
  const [Categoria, setCategoria] = useState('');
  const [Quantidade, setQuantidade] = useState('');
  const [DataValidade, setDataValidade] = useState('');
  const [Unidade, setUnidade] = useState('');

  async function handleCreateItem() {
    try {
      console.log("chegou")
      const dataAdicao = new Date().getTime(); // Converte a data e hora atual para timestamp (em milissegundos)
      const dataValidadeTimestamp = DataValidade ? new Date(DataValidade.split('/').reverse().join('-')).getTime() : null; // Converte DataValidade para timestamp
      console.log("chegou2")

      const item = {
        Nome,
        Categoria,
        Quantidade: parseInt(Quantidade, 10),
        DataValidade: dataValidadeTimestamp, // Armazena o timestamp de DataValidade
        Unidade,
        dataAdicao,
      };

      console.log(item);
      await supabaseService.addItem(item);
      Alert.alert("Sucesso", "Item cadastrado com sucesso!");
      navigation.navigate("List");
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  }


  function backToList() {
    navigation.navigate("List");
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0A2342', '#0D3C76']} style={styles.background}>
        <ImageBackground style={styles.backgroundSVG} source={ImageSvg} resizeMode="cover">
          <View style={styles.content}>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Cadastrar Novo Item</Text>
              <View style={styles.formContainer}>
                <FormControl mb="5">
                  <FormControl.Label>Nome do Item</FormControl.Label>
                  <Input
                    variant="underlined"
                    style={styles.textInputName}
                    value={Nome}
                    onChangeText={(itemValue) => setNome(itemValue)}
                  />
                </FormControl>

                <FormControl mb="5">
                  <FormControl.Label>Selecione a Categoria</FormControl.Label>
                  <Picker
                    selectedValue={Categoria}
                    style={styles.formPicker}
                    mode="dropdown"
                    onValueChange={(itemValue) => setCategoria(itemValue)}>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="Alimento Não Perecível" value="Alimento Não Perecível" />
                    <Picker.Item label="Alimento Orgânico" value="Alimento Orgânico" />
                    <Picker.Item label="Produto de Limpeza" value="Produto de Limpeza" />
                    <Picker.Item label="Bebida" value="Bebida" />
                    <Picker.Item label="Outros" value="Outros" />
                  </Picker>
                </FormControl>

                <HStack width="1/2">
                  <FormControl mb="5">
                    <FormControl.Label>Data de Validade</FormControl.Label>
                    <TextInputMask
                      type="datetime"
                      options={{ format: 'DD/MM/YYYY' }}
                      value={DataValidade}
                      onChangeText={(itemValue) => setDataValidade(itemValue)}
                      style={styles.textInputDate}
                      placeholder="__/__/____"
                      keyboardType="numeric"
                    />
                  </FormControl>

                  <FormControl mb="5">
                    <FormControl.Label>Quantidade</FormControl.Label>
                    <Input
                      style={styles.textInputQuantity}
                      variant="underlined"
                      type="text"
                      keyboardType="number-pad"
                      value={Quantidade}
                      onChangeText={(itemValue) => setQuantidade(itemValue)}
                    />
                  </FormControl>
                </HStack>

                <FormControl mb="5">
                  <FormControl.Label>Unidade</FormControl.Label>
                  <Picker
                    selectedValue={Unidade}
                    mode="dropdown"
                    onValueChange={(itemValue) => setUnidade(itemValue)}>
                    <Picker.Item label="Unidades" value="Unidades" />
                    <Picker.Item label="Quilos" value="Quilos" />
                    <Picker.Item label="Litros" value="Litros" />
                  </Picker>
                </FormControl>

                <TouchableOpacity onPress={() => handleCreateItem()} style={styles.button}>
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={backToList} style={styles.footerButton}>
                <Text style={styles.footerButtonText}>Voltar para Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}
