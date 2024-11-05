import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#0D3C76',
  },
  container: {
    width: '100%',
    height: '75%',
    flexDirection: 'column',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2342',
    zIndex: 0,
  },
  image: {
    width: 300,
    height: 300,
    zIndex: 1,
    marginStart: 100,
    marginVertical: -100
  },
  input: {
    width: 380,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#0D3C76',
    marginBottom: 10,
    marginTop: 10,
  },

  button: {
    width: 380,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2CA58D',
    textAlign: 'center',
    color: '#0A2342',
    marginTop: 10

  },

  title: {
    fontSize: 35,
    color: '#FFFDF7',
    fontWeight: 'bold',
    marginBottom: 20,
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

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    fontSize: 15,
    color: '#FFFDF7',
    textAlign: 'center',
    marginTop: 5,
  },
  registerTextGreen: {
    fontSize: 15,
    color: '#2CA58D',
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  registerButton: {
    marginTop: 5,
  },

})