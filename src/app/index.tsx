import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

export default function App() {
 return (
   <View style={styles.container}>
    <StatusBar hidden={true} />
        <View style={styles.logoView}>
            <Image source={require('../assets/icon.png')} style={styles.logo} />
        </View>
        <View>
            <Text style={styles.slogan}>The Power of React Native</Text>
            <Text style={styles.title}>We're just creating an app.</Text>
        </View>
        <View style={styles.btView}>
            <TouchableOpacity>
                <Image source={require('../assets/brazil.png')} style={styles.flag} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/usa.png')} style={styles.flag} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/spain.png')} style={styles.flag} />
            </TouchableOpacity>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  title:{
    color: '#fff',
    fontSize:58,
    fontWeight: 'bold',
    lineHeight: 60
  },
  slogan: {
    color:'#fff', 
    paddingVertical:10, 
    fontSize:16
},
btView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    position: 'absolute',
    bottom: 120,
    left: '5%',
},
flag:{
    width: 40,
    height:40,
    borderRadius: 20,
},
logoView: {
    position: 'absolute',
    top: 150,
    left: '20%',
    zIndex: 1
},
logo:{
    width: 100,
    height: 100,
}

});