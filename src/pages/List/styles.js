
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundSVG: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  listContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: '#0A2342',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFDF799',
    textAlign: 'center',
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

  fab: {
    backgroundColor: '#84BC9C',
    width: 70,
    height: 70
  },

  itemContainer: {
    backgroundColor: '#FFFDF7',
    padding: 10,
    borderRadius: 4,
    marginTop: 20
  },

  itemName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  itemDetails: {
    fontSize: 16,
    color: '#4775D9'
  },
  itemVal: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemUnity: {
    fontSize: 20,
    fontWeight: 'bold'
  },

});
