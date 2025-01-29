import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
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

  function formatDateToSQL(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  async function handleCreateItem() {
    try {
      const dataAdicao = formatDateToSQL(new Date().getTime());
      const dataValidadeTimestamp = DataValidade
        ? formatDateToSQL(new Date(DataValidade.split('/').reverse().join('-')).getTime())
        : null;

      const item = {
        nome: Nome,
        categoria: Categoria,
        quantidade: parseInt(Quantidade, 10),
        datavalidade: dataValidadeTimestamp,
        unidade: Unidade,
        dataadicao: dataAdicao,
      };

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
                    onChangeText={setNome}
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
                    <Picker.Item label="" value="" />
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
