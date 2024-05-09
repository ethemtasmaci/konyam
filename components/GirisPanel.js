import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import KayitsizBildirimSvg from '../svg/KayitsizBildirimSvg'

const GirisPanel = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        width: '100%'
      }}>

        <View style={{
          width: '95%',
          height: 92,
          backgroundColor: '#F7F7F7',
          borderRadius: 3,
          alignItems: 'center',
          marginBottom: 10,
          left: 10
        }}>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: '#8CB75E',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }} />
          <View style={{
            flexDirection: 'row',
            marginTop: 11
          }}>
            <View style={{
              width: '20%',
              marginLeft: 15,
              marginRight: -10,
              marginTop: 5
            }}><KayitsizBildirimSvg height={47} width={45} /></View>
            <View style={{
              width: '70%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 5,
            }}>
              <Text style={{ color: '#000', fontSize: 13, fontFamily: 'Nunito Sans', fontWeight: '300' }}>Uygulamada sunduğumuz özelliklerin tamamından
                faydalanabilmeniz için <Text onPress={() => handleMenuPress('GirisYap')} style={{ fontWeight: '500' }}>kayıt olmalı</Text> veya <Text onPress={() => handleMenuPress('GirisYap')} style={{ fontWeight: '500' }}>giriş yapmalısınız</Text>.</Text>
            </View>
          </View>
        </View>

      </View>
    </>
  )
}

export default GirisPanel