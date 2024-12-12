
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFDF7',
    textAlign: 'center',
    marginTop: 50
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFDF7',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: -40
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
    width: '100%',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    bottom: 0
  },
  footerButtonText: {
    fontSize: 16,
    color: '#84BC9C',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

});
