import { SafeAreaView , StatusBar} from 'react-native';
import Cesta from './src/screens/Cesta/Index';
import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import mock from './src/screens/Cesta/mocks/cesta';

export default () => {

  const [fonteCarregada] = useFonts({
    "MontserratRegular":Montserrat_400Regular,
    "MontserratBold":Montserrat_700Bold
  })

  if(!fonteCarregada){
    return <AppLoading/>
  }
  return (
    <SafeAreaView style={{flex: 1}}>    
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


