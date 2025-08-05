import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
 return (
   <View style={styles.container}>
    <StatusBar hidden={true} />
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.title}>We just create an app with internacional language.</Text>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1c1c',
    paddingHorizontal: 20,
  },
  title:{
    color: '#fff',
    fontSize:58,
    fontWeight: 'bold',
    lineHeight: 60
  }
});