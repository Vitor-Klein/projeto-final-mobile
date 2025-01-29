import { StyleSheet } from "react-native";

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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  contentContainer: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute'
  },

  formContainer: {
    width: 300,
    height: 400,
    backgroundColor: "#FFFDF7",
    padding: 20,
    borderRadius: 8
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFDF7',
    textAlign: 'center',
    paddingTop: 50
  },
  textInputName: {
    paddingBottom: 15,
    fontSize: 15,
  },
  formPicker: {
    borderBottomWidth: 0.8,
    borderColor: "#c3c3c3",
  },
  textInputDate: {
    borderBottomWidth: 0.8,
    borderColor: "#c3c3c3",
    width: 100,
  },

  textInputQuantity: {
    paddingBottom: 15,
    fontSize: 15,
  },

  button: {
    width: '100%',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#84BC9C',
    borderRadius: 8,
    alignItems: 'center',
    color: "#0A2342"
  },

  footerButton: {
    width: '100%',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    bottom: 0,
    position: 'relative'
  },
  footerButtonText: {
    fontSize: 16,
    color: '#84BC9C',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
