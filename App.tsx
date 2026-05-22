import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Importando o i18n
import './src/utils/i18n'; 
import { useTranslation } from 'react-i18next';


export default function App() {
  // Usando o hook useTranslation para acessar as funções de tradução
  const {t, i18n} = useTranslation();
  // Função para alterar o idioma
  const changeLanguage = (value: 'pt' | 'en' | 'sp') => {
    i18n.changeLanguage(value)
    .then(() => {
      console.log('Idioma Alteradao')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
       <Text style={styles.Text2}>
                {t('The Power of React Native.')}
        </Text>
        <Text style={styles.Text1}>
                {t('We are just create an app.')}
        </Text>   

      <StatusBar hidden={true} />
      <View style={styles.blkFlag}>
        <TouchableOpacity onPress={() => changeLanguage('pt')}>
          <Image source={require('./src/img/brazil.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Image source={require('./src/img/usa.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('sp')}>
          <Image source={require('./src/img/spain.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  blkFlag: {
    alignItems:'center',
    justifyContent:'space-between',
    zIndex:1,
    flexDirection:'column', 
    position:'absolute',
    bottom:100,
    left:20,
    height:130,
   
  },
  Text1: {
    color:'#fff',
    fontSize:55,
    lineHeight:50,
    fontWeight:'bold',
  },
  Text2: {
    color:'#fff',
    fontSize:20,
    lineHeight:20,
    fontWeight:500,
    marginBottom:20,
  }
});
