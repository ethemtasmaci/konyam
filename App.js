import * as React from 'react';
import { Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnKisim1 from './src/OnKisim1';
import OnKisim2 from './src/OnKisim2';
import OnKisim3 from './src/OnKisim3';
import AnasayfaK from './src/AnasayfaK';
import YanMenu from './components/YanMenu';
import Uyari from './components/Uyari';
import GirisYap from './src/GirisYap';
import KayitOl from './src/KayitOl';
import AnasayfaG from './src/AnasayfaG';
import DogralulamaYHO from './src/DogralulamaYHO';
import KisiselBilgiler from './src/KisiselBilgiler';
import IlceSecimi from './components/IlceSecimi';
import Parola from './src/Parola';
import KayitOlSon from './src/KayitOlSon';
import SifreUnuttum from './src/SifreUnuttum';
import DogrulamaSifreUnuttum from './src/DogrulamaSifreUnuttum';
import YeniParolaOlustur from './src/YeniParolaOlustur';
import ParolaUnuttumSon from './src/ParolaUnuttumSon';
import IcerikGonder from './components/IcerikGonder';
import SesKayitGonder from './components/SesKayitGonder';
import FotografGonder from './components/FotografGonder';
import VideoGonder from './components/VideoGonder';
import GondermeDetay from './src/GondermeDetay';
import FotografGonderUyari from './components/FotografGonderUyari';
import VideoGonderUyari from './components/VideoGonderUyari';

const Stack = createStackNavigator();

function App() {
  React.useEffect(() => {
    if (Platform.OS === "android") {
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    }
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnKisim1" screenOptions={{ headerShown: false }}>
      {/* <Stack.Navigator initialRouteName="IcerikGonder" screenOptions={{ headerShown: false }}> */}

        <Stack.Screen name="OnKisim1" component={OnKisim1} />
        <Stack.Screen name="OnKisim2" component={OnKisim2} />
        <Stack.Screen name="OnKisim3" component={OnKisim3} />

        <Stack.Screen name="AnasayfaK" component={AnasayfaK} />
        <Stack.Screen name="AnasayfaG" component={AnasayfaG} />

        <Stack.Screen name="GirisYap" component={GirisYap} />

        <Stack.Screen name="KayitOl" component={KayitOl} />
        <Stack.Screen name="DogralulamaYHO" component={DogralulamaYHO} />
        <Stack.Screen name="KisiselBilgiler" component={KisiselBilgiler} />
        <Stack.Screen name="IlceSecimi" component={IlceSecimi} />
        <Stack.Screen name="Parola" component={Parola} />
        <Stack.Screen name="KayitOlSon" component={KayitOlSon} />

        <Stack.Screen name="SifreUnuttum" component={SifreUnuttum} />
        <Stack.Screen name="DogrulamaSifreUnuttum" component={DogrulamaSifreUnuttum} />
        <Stack.Screen name="YeniParolaOlustur" component={YeniParolaOlustur} />
        <Stack.Screen name="ParolaUnuttumSon" component={ParolaUnuttumSon} />

        <Stack.Screen name="YanMenu" component={YanMenu} />

        <Stack.Screen name="Uyari" component={Uyari} />
        <Stack.Screen name="IcerikGonder" component={IcerikGonder} />
        <Stack.Screen name="SesKayitGonder" component={SesKayitGonder} />
        <Stack.Screen name="FotografGonderUyari" component={FotografGonderUyari} />
        <Stack.Screen name="FotografGonder" component={FotografGonder} />
        <Stack.Screen name="VideoGonder" component={VideoGonder} />
        <Stack.Screen name="VideoGonderUyari" component={VideoGonderUyari} />
        <Stack.Screen name="GondermeDetay" component={GondermeDetay} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;