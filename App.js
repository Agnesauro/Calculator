import { StyleSheet, Text, View } from 'react-native';
import ComponentTela from './src/Components/ComponentTela';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponentTela/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
