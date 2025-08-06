import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

// Importing the i18n configuration
import '../utils/i18n';
import { useTranslation } from 'react-i18next';

export default function App() {

    // Hook to get the translation function
    const { t, i18n } = useTranslation();
    // Function to change the language
    const changeLanguage = (value: 'pt' | 'en' | 'sp') => {
    i18n.changeLanguage(value)
    .then(() => {
      console.log('Language changed to', value)
    })
    .catch((error) => {
      console.log(error)
    })
  }

 return (
   <View style={styles.container}>
    <StatusBar hidden={true} />
        <View style={styles.logoView}>
            <Image source={require('../assets/icon.png')} style={styles.logo} />
        </View>
        <View>
            <Text style={styles.slogan}>{t("The Power of React Native")}</Text>
            <Text style={styles.title}>{t("We are just creating an app.")}</Text>
        </View>
        <View style={styles.btView}>
            <TouchableOpacity
                onPress={() => changeLanguage('pt')}
            >
                <Image source={require('../assets/brazil.png')} style={styles.flag} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => changeLanguage('en')}
            >
                <Image source={require('../assets/usa.png')} style={styles.flag} />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => changeLanguage('sp')}
            >
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