
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFDF7',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFDF7',
  },
  button: {
    width: '100%',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#84BC9C',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#0A2342',
    fontWeight: 'bold',
  },
  footerButton: {
    position: 'absolute',
    bottom: 20,
    left: '10%',
    right: '10%',
    backgroundColor: '#0D3C76',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  footerButtonText: {
    fontSize: 16,
    color: '#84BC9C',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

});
