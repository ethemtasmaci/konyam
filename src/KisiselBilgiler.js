import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import GeriSvg from '../svg/GeriSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import DetayKisilerSvg from '../svg/DetayKisilerSvg'
import TarihSvg from '../svg/TarihSvg'
import AssaGosterimSvg from '../svg/AssaGosterimSvg';
import KonumSvg from '../svg/KonumSvg';


const KisiselBilgiler = ({ route }) => {
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

          <TouchableOpacity onPress={() => handleMenuPress('DogralulamaYHO')}>
            <GeriSvg height={30} width={30} fiil={'#000'} />
          </TouchableOpacity>

          <Text style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: 'medium',
            marginTop: 37
          }}>Temel Bilgiler</Text>

          <Text style={{
            color: '#000',
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight: 'light',
          }}>
            Bilgilerinizi Giriniz
          </Text>

          <View>
            <Text style={{
              color: '#000',
              marginTop: 70,
              fontFamily: 'Poppins',
              fontSize: 16,
              paddingTop: 0
            }}>Adınız</Text>
            <View style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <KullaniciSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder='Örn. Ahmet'
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
            }}>Soyadınız</Text>
            <View style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <DetayKisilerSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder='Örn. Yılmaz'
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
            }}>İlçe</Text>
            <TouchableOpacity onPress={() => handleMenuPress('IlceSecimi')} style={{ width: '100%', height: 50, marginTop: 15, borderRadius: 8, borderWidth: 1, borderColor: '#BCB8B6', flexDirection: 'row' }}>
              <KonumSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 8 }} />
              <TextInput style={{
                flex: 1,
                color: '#000',
                paddingHorizontal: 10
              }}
                placeholderTextColor="#000"
                placeholder={selectedIlce ? selectedIlce : 'İlçe Seçiniz...'}
              />
              <AssaGosterimSvg fill={'#000'} height={20} width={20} style={{ marginHorizontal: 10, marginTop: 15, right: 5 }} />
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>Cinsiyetiniz</Text>
            <View style={styles.radioGroup}>
              <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton.Item value="kadın" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Kadın</Text>
                  <RadioButton.Item value="erkek" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Erkek</Text>
                </View>
              </RadioButton.Group>
            </View>
          </View>

          <View>
            <Text style={{
              color: '#878787',
              marginTop: 35,
              fontFamily: 'Poppins',
              fontSize: 14,
              textAlign: 'center',
            }}>
              * Uygulamamız sadece <Text style={{ color: '#8CB75E' }}>Konya'da ikamet eden kullanıcılara yönelik </Text> olduğu için <Text style={{ color: '#8CB75E' }}>İl bilgisi varsayılan olarak Konya olarak </Text>  gelmektedir. <Text style={{ color: '#8CB75E' }}>İlçe seçiminizi </Text> yaparak ilerleyebilirsiniz.
            </Text>
          </View>

          <TouchableOpacity onPress={() => handleMenuPress('Parola')}>
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
                İleri
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

export default KisiselBilgiler