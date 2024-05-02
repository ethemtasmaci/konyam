import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import GeriSvg from '../svg/GeriSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import DetayKisilerSvg from '../svg/DetayKisilerSvg'
import TarihSvg from '../svg/TarihSvg'
import AssaGosterimSvg from '../svg/AssaGosterimSvg';
import KonumSvg from '../svg/KonumSvg';
import BuyutmeSvg from '../svg/BuyutmeSvg';


const GondermeDetay = ({ route }) => {
  const [value, setValue] = useState('');
  const selectedIlce = route?.params?.selectedIlce;
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
  console.log('Seçilen İlce: ', selectedIlce);
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
      }}>
        <View style={{
          width: '85%',
          left: 25,
          right: 25,
          top: 50
        }}>

          <TouchableOpacity onPress={() => handleMenuPress('IcerikGonder')}>
            <GeriSvg height={30} width={30} fiil={'#000'} />
          </TouchableOpacity>

          <Text style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: 'medium',
            marginTop: 37
          }}>
            Detaylar
          </Text>

          <Text style={{
            color: '#878787',
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight: 'light',
          }}>
            İçeriğinize ait detayları girin
          </Text>

          <View>
            <Text style={{
              color: '#000',
              marginTop: 25,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Kategori</Text>
            <TouchableOpacity style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 15
              }}
                numberOfLines={2}
                multiline={true}
                editable={false}
                placeholderTextColor="#000"
                placeholder={'Seçiniz...'}
              />
              <AssaGosterimSvg fill={'#C3C3C3'} height={20} width={20} style={{ marginHorizontal: 10, marginTop: 15, right: 5 }} />
            </TouchableOpacity>
          </View>



          <View>
            <Text style={{
              color: '#000',
              marginTop: 25,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Başlık</Text>
            <View style={{ width: '100%', paddingLeft: 5, height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder='Örn. Otogar Kavşağında Kaza vb.'
              />
            </View>
          </View>

          <View>
            <Text style={{
              color: '#000',
              marginTop: 25,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Açıklama (İsteğe Bağlı)</Text>
            <View style={{ width: '100%', paddingLeft: 5, height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10,
              }}
                numberOfLines={2}
                placeholderTextColor="#000"
                placeholder='Örn. 42 APY 34 plakalı araç sürücüsü direksiyon hakimiyetini kaybederek orta refüjlere çarpmış.'
              />
            </View>
          </View>

          <View>

            <Text style={{
              color: '#000',
              marginTop: 10,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Konum</Text>

            <View style={{
              width: 30,
              height: 30,
              backgroundColor: '#fff',
              borderRadius: 5,
              zIndex: 100,
              position: 'absolute',
              right: 20,
              top: 60,
            }}>
              <BuyutmeSvg height={20} width={20} style={{ paddingTop: 30, marginLeft: 'auto', marginRight: 'auto' }} />
            </View>

            {/* bu kısımda ise resim altta kalacak  */}
            <Image style={{
              position: 'relative',
              zIndex: 1,
              height: 200,
              width: '100%',
              borderRadius: 5,
              marginTop: 10,
            }} source={require("../img/harita.png")} />

          </View>

          <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
            <View style={{
              marginTop: 30,
              height: 60,
              width: '100%',
              borderRadius: 8,
              backgroundColor: '#8CB75E',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#fff',
                fontFamily: 'Poppins',
                fontSize: 18,
                fontWeight: 'light',
                textAlign: 'center'
              }}>
                Gönder
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 'auto',
    marginTop: 20,
    marginLeft: -15
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Poppins',
    marginLeft: -50
  },
  radioGroup: {
    flexDirection: 'row',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GondermeDetay