import * as React from 'react';
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnKisim1" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="OnKisim1" component={OnKisim1} />
        <Stack.Screen name="OnKisim2" component={OnKisim2} />
        <Stack.Screen name="OnKisim3" component={OnKisim3} />

        <Stack.Screen name="AnasayfaK" component={AnasayfaK} />
        <Stack.Screen name="AnasayfaG" component={AnasayfaG} />
        <Stack.Screen name="GirisYap" component={GirisYap} />
        <Stack.Screen name="KayitOl" component={KayitOl} />

        <Stack.Screen name="YanMenu" component={YanMenu} />
        <Stack.Screen name="Uyari" component={Uyari} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;