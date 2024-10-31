import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2342',
  },
  input: {
    width: 350,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#0D3C76',
    marginBottom: 10,
    marginTop: 10,
  },

  button: {
    width: 350,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2CA58D',
    textAlign: 'center',
    color: '#0A2342',
    marginTop: 10

  },

  title: {
    fontSize: 20,
    color: '#FFFDF7',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10
  },

  enterButton: {
    fontSize: 20,
    color: '#FFFDF7',
    textAlign: 'center',
  },

  forgotPasswordText: {
    fontSize: 15,
    color: '#FFFDF7',
    textAlign: 'center',
    marginTop: 5
  },

})