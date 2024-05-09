import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'


import GeriSvg from '../svg/GeriSvg'
import TelefonSvg from '../svg/TelefonSvg'
import AnahtarSvg from '../svg/AnahtarSvg'
import GozSvg from '../svg/GozSvg'
import YeniKayitSvg from '../svg/YeniKayitSvg';
import LogoSvg from '../svg/LogoSvg';

const GirisYap = () => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  return (
    <>
      <View style={{
        backgroundColor: '#ffff',
        width: '100%',
        height: '100%',
      }}>
        <View style={{
          width: '85%',
          left: 25,
          right: 25,
          top: 50
        }}>
          <View style={{
            flexDirection: 'row',
            top: 40,
          }}>
            <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')}>
              <GeriSvg height={30} width={30} fiil={'#fff'} />
            </TouchableOpacity>

            <LogoSvg height={50} width={180} style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          </View>

          <View>
            <Text style={{
              color: '#000',
              top: 70,
              marginTop: 30,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Telefon Numaranız</Text>
            <View style={{ width: '100%', height: 50, top: 85, borderRadius: 8, borderWidth: 2, borderColor: '#C3C3C3', flexDirection: 'row' }}>
              <TelefonSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder='0505 505 5005'
              />
            </View>
          </View>

          <View>
            <Text style={{
              color: '#000',
              top: 110,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Parolanız</Text>
            <View style={{ width: '100%', height: 50, top: 125, borderRadius: 8, borderWidth: 2, borderColor: '#C3C3C3', flexDirection: 'row' }}>
              <AnahtarSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder='*********'
              />
              <GozSvg fill={'#878787'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, right: 5 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', top: 145 }}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={{ alignSelf: 'center', borderRadius: 12, }}
                tintColors={{ true: '#8CB75E', false: '#8CB75E' }}
              />
              <Text style={{ color: '#878787', marginLeft: 8 }}>Beni Hatırla</Text>
              <TouchableOpacity style={{ color: '#000', marginLeft: 'auto' }} onPress={() => handleMenuPress('SifreUnuttum')}>
                <Text style={{ color: '#878787', marginLeft: 'auto' }}>Parolamı Unuttum</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ top: 125 + 40 }}>
            <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
              <View style={{
                width: '100%',
                height: 60,
                backgroundColor: '#8CB75E',
                borderRadius: 8,
              }}>
                <Text style={{
                  color: '#fff',
                  textAlign: 'center',
                  width: '100%',
                  fontSize: 18,
                  fontFamily: 'Poppins',
                  fontWeight: 'light',
                  marginTop: 17,
                }}>Giriş Yap</Text>
              </View>
            </TouchableOpacity>

            <View style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <View style={{ borderBottomColor: '#8CB75E', borderBottomWidth: 1, height: 1, width: '15%', marginTop: 30 }} />
              <Text style={{
                color: '#2D2D2D',
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'Poppins',
                marginTop: 20,
                marginLeft: 5,
                marginRight: 5
              }}> veya </Text>
              <View style={{ borderBottomColor: '#8CB75E', borderBottomWidth: 1, height: 1, width: '15%', marginTop: 30 }} />
            </View>

            <TouchableOpacity onPress={() => handleMenuPress('KayitOl')} style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              flexDirection: 'row',
              marginTop: 20
            }}>
              <YeniKayitSvg style={{ marginRight: 5 }} height={25} width={25} />
              <Text style={{
                color: '#000',
                fontSize: 18,
                fontFamily: 'Nunito Sans',
                marginTop: 2
              }}>Yeni Hesap Oluşturun</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </>
  )
}

export default GirisYap