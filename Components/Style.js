import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#4CAF50', 
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333', 
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50', 
  },
  listItemSeparator: {
    height: 1,
    backgroundColor: '#4CAF50', 
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', 
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#4CAF50', 
  },
  input: {
    height: 40,
    borderColor: '#4CAF50', 
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50', 
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
