import React from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const OnKisim2 = ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="transparent" translucent={true} />
    <Image source={require('../img/onkisim2.png')} style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, resizeMode: 'cover' }} />
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      opacity: 0.4,
      position: 'absolute'
    }} />
    {/* <LinearGradient
      colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,1)']}
      style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
    /> */}

    <View style={{
      marginTop: '126%'
    }}>
      <Text style={{
        color: '#fff',
        fontSize: 27,
        fontFamily: 'Poppins',
        fontWeight: '800',
        width: '70%',
        left: 24
      }}>
        Avantajlı fırsatlardan
        yararlanın.
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'light',
        width: '90%',
        left: 24,
        marginTop: 17
      }}>
        Uygulama içerisinde kazandığınız puanlar ile birçok noktada sunulan farklı fırsatlardan faydalanın.
      </Text>
    </View>
    <View style={{
      width: '90%',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <View style={{
        width: 120,
        height: 4,
        marginTop: 45,
        borderRadius: 50,
        backgroundColor: '#978D86',
      }} />

      <View style={{
        width: 120,
        height: 4,
        marginTop: 45,
        marginLeft: 11,
        borderRadius: 50,
        backgroundColor: '#8CB75E',
      }} />

      <View style={{
        width: 120,
        height: 4,
        marginTop: 45,
        marginLeft: 11,
        borderRadius: 50,
        backgroundColor: '#978D86',
      }} />
    </View>

    <TouchableOpacity onPress={() => navigation.navigate('OnKisim3')}>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={{
          width: 380,
          height: 60,
          backgroundColor: '#8CB75E',
          borderRadius: 8,
          marginTop: 52
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 18,
            marginTop: 17,
            fontFamily: 'Poppins',
            fontWeight: 'light',
            textAlign: 'center',
            width: '100%'
          }}>İleri</Text>
        </View>
      </View>
    </TouchableOpacity>

  </View>
);

export default OnKisim2;