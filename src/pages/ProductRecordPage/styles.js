
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
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFDF799',
    textAlign: 'center',
  },
  searchInput: {
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    height: '90%',
    flex: 1,
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    backgroundColor: '#FFFDF7',
    padding: 15,
    borderRadius: 4,
    width: '90%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A2342',
  },
  itemDetails: {
    fontSize: 16,
    color: '#D81E5B',
    marginTop: 5,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  itemVal: {
    fontSize: 16,
    color: '#0A2342',
    fontWeight: 'bold',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerButton: {
    backgroundColor: '#FFFDF7',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
    color: '#0A2342',
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
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
