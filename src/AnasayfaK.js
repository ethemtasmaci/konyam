import { View, Text, VirtualizedList, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import GirisPanel from '../components/GirisPanel'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import HaritalarResim from '../components/HaritalarResim'
import ListGorunumu from '../components/ListGorunumu'
import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberSvg from '../svg/HaberSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import AyarlarSvg from '../svg/AyarlarSvg'
import GonderSvg from '../svg/GonderSvg'

const AnasayfaK = () => {
  const navigation = useNavigation();
  const [secilenGorunum, setSecilenGorunum] = useState('Harita');
  const [isVisible, setIsVisible] = useState(false); // yeni durum değişkeni
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current.present();
    setIsVisible(true);
  };

  const handleDismissModal = () => {
    setIsVisible(false); // alt sayfa kapatıldığında alt sayfayı görünmez yap
  };

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 1
      }}>

        <UstMenu />

        <InstaStory />

        <Kurlar />

        <GirisPanel />

        <View style={{
          flexDirection: 'row',
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 44,
          backgroundColor: '#fff',
          borderColor: '#F5F5F5',
          borderWidth: 1,
          borderRadius: 6,
          paddingTop: 4,
        }}>
          {/* Harita Görünümü */}
          <TouchableOpacity style={{
            height: 35,
            width: '45%',
            marginLeft: 13,
            marginRight: 8,
          }} onPress={() => setSecilenGorunum('Harita')}>
            <View style={{
              backgroundColor: secilenGorunum === 'Harita' ? '#8CB75E' : '#fff',
              borderRadius: 3,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <HaritaSvg height={22} width={22} fill={secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f'} style={{
                margin: 6,
                marginLeft: 10
              }} />
              <Text style={{
                color: secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f',
                marginTop: -2,
                fontFamily: 'Nunito Sans',
                fontSize: 15,
                fontVariant: 'Regular'
              }}>Harita Görünümü</Text>
            </View>
          </TouchableOpacity>

          {/* Liste Görünümü */}
          <TouchableOpacity style={{
            width: '45%',
            height: 35,
          }} onPress={() => setSecilenGorunum('Liste')}>
            <View style={{
              backgroundColor: secilenGorunum === 'Liste' ? '#8CB75E' : '#fff',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 3,
            }}>
              <ListSvg height={22} width={22} fill={secilenGorunum === 'Liste' ? '#fff' : '#9f9f9f'} style={{
                margin: 6,
                marginTop: 6,
                marginLeft: 20
              }} />
              <Text style={{
                color: secilenGorunum === 'Liste' ? '#fff' : '#9f9f9f',
                fontSize: 15,
                fontFamily: 'Nunito Sans',
                fontVariant: 'Regular',
              }}>Liste Görünümü</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Alt alan - Seçilen görünüme göre içeriğin render edilmesi */}
        {secilenGorunum === 'Harita' ? <HaritalarResim /> : <ListGorunumu />}




        {/* menu kısmı */}
        <View style={{
          width: '95%',
          height: 120,
          zIndex: 100,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <View style={{
            marginTop: 40,
            width: '100%',
            backgroundColor: '#F5F5F5',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
          }}>

            <AnasayfaSvg height={30} width={'18%'} style={{}} />

            <HaberSvg height={30} width={'18%'} style={{}} />

            <TouchableOpacity style={{ top: -50, marginLeft: 10, }} onPress={handlePresentModalPress}>
              <GonderSvg />
            </TouchableOpacity>

            <KullaniciSvg height={30} width={'18%'} fill={'#B9B9B9'} style={{}} />

            <AyarlarSvg height={30} width={'18%'} style={{}} />

          </View>

        </View>

        <View style={{
          width: '100%',
          height: isVisible ? '45%' : '0%', 
          zIndex: 1000,
          position: 'absolute',
          bottom: 0, 
        }}>

          <BottomSheetModalProvider>

            <BottomSheetModal
              ref={bottomSheetModalRef}
              snapPoints={['90%']}
              onDismiss={handleDismissModal}
            >
              <View>
                <View style={{
                  width: '100%',
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 11,
                  borderTopRightRadius: 11,
                  zIndex: 100,
                  position: 'absolute'
                }}>
                  <View style={{
                    marginLeft: 25,
                    marginRight: 25
                  }}>
                    <Text style={{
                      color: '#8CB75E',
                      fontFamily: 'Nunito Sans',
                      fontSize: 21,
                      marginTop: 30,
                      marginBottom: 10,
                    }}>Bilgi</Text>
                    <Text style={{
                      color: '#000',
                      fontFamily: 'Nunito Sans',
                      fontSize: 14,
                      marginBottom: 20,
                    }}>İçerik gönderebilmek için uygulamaya kayıt olmalı ve kullanıcı girişi yapmalısınız.</Text>

                    <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
                      <View style={{
                        width: '100%',
                        height: 55,
                        backgroundColor: '#8CB75E',
                        borderRadius: 8,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      }}>
                        <Text style={{
                          color: '#fff',
                          textAlign: 'center',
                          fontFamily: 'Nunito Sans',
                          fontSize: 18,
                          fontWeight: 'regular',
                          marginTop: 12
                        }}>Giriş Yap</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleMenuPress('KayitOl')}>
                      <View style={{
                        width: '100%',
                        height: 55,
                        backgroundColor: '#fff',
                        borderColor: '#646464',
                        borderWidth: 2,
                        borderRadius: 8,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 10
                      }}>
                        <Text style={{
                          color: '#646464',
                          textAlign: 'center',
                          fontFamily: 'Nunito Sans',
                          fontSize: 18,
                          fontWeight: 'regular',
                          marginTop: 12
                        }}>Yeni Hesap Oluştur</Text>
                      </View>
                    </TouchableOpacity>

                  </View>
                </View>

              </View>
            </BottomSheetModal>

          </BottomSheetModalProvider>
        </View>


      </View>
    </>
  )
}

export default AnasayfaK