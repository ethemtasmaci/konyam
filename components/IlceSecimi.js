import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import GeriSvg from '../svg/GeriSvg'
import { ScrollView } from 'react-native-gesture-handler';


const IlceSecimi = () => {
  const [value, setvalue] = useState('');

  const handleMenuPress = (screenName) => {
    if (screenName === 'KisiselBilgiler') {
      navigation.navigate(screenName, { selectedIlce: value }); // Seçilen ilçe bilgisini parametre olarak geç
    } else {
      navigation.navigate(screenName);
    }
  };

  const navigation = useNavigation();

  const handleMenuPres = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };
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

          <TouchableOpacity onPress={() => ('DogralulamaYHO')}>
            <GeriSvg height={30} width={30} fiil={'#000'} />
          </TouchableOpacity>

          <Text style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: 27,
            fontWeight: 'medium',
            marginTop: 37
          }}>İlçe</Text>

          <Text style={{
            color: '#000',
            fontSize: 16,
            fontFamily: 'Poppins',
            fontWeight: 'light',
          }}>
            İlçe seçiniz
          </Text>

          <RadioButton.Group onValueChange={newvalue => setvalue(newvalue)} value={value}>
            <View style={{
              top: 20,
              marginBottom: 20,
              height: 530,
              width: '100%'
            }}>
              <ScrollView>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Ahırlı" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Ahırlı</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Akören" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Akören</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Akşehir" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Akşehir</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Altınekin" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Altınekin</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Beyşehir" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Beyşehir</Text>
                </View>


                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Bozkır" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Bozkır</Text>
                </View>


                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Cihanbeyli" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Cihanbeyli</Text>
                </View>


                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Çeltik" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Çeltik</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Çumra" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Çumra</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Derbent" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Derbent</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Derebucak" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Derebucak</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Doğanhisar" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Doğanhisar</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Emirgazi" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Emirgazi</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Ereğli" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Ereğli</Text>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -20
                }}>
                  <RadioButton.Item value="Güneysınır" color="#8CB75E" />
                  <Text style={{ color: '#000', marginLeft: -15 }}>Güneysınır</Text>
                </View>

              </ScrollView>
            </View>
          </RadioButton.Group>


          <TouchableOpacity onPress={() => handleMenuPress('KisiselBilgiler')}>
            <View style={{
              marginTop: 42,
              height: 60,
              width: '100%',
              borderRadius: 8,
              backgroundColor: '#D7D7D7',
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
                Seçimi Onayla
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </>
  )
}

export default IlceSecimi