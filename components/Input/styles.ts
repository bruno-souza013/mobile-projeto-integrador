import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '60%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 32,
    color: '#ccc',
    marginBottom: 6,
    marginLeft: 2,
    fontFamily:'BigShoulders-Regular'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 10,
    height: 42,
    width:'100%'
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
