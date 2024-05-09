import { View, Text, VirtualizedList, StatusBar, Image, TouchableOpacity } from 'react-native'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import React, { useState, useEffect, useRef } from 'react';

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import HaritalarResim from '../components/HaritalarResim'
import ListGorunumu from '../components/ListGorunumu'
import HosGeldin from './HosGelddin';

import AnasayfaSvg from '../svg/AnasayfaSvg';
import HaberSvg from '../svg/HaberSvg';
import GonderSvg from '../svg/GonderSvg';
import KullaniciSvg from '../svg/KullaniciSvg';
import AyarlarSvg from '../svg/AyarlarSvg';
import SesliMesajSvg from '../svg/SesliMesajSvg';
import GorselSvg from '../svg/GorselSvg';
import VideoSvg from '../svg/VideoSvg';
import DuraklatSvg from '../svg/DuraklatSvg';
import TitresimSvg from '../svg/TitresimSvg';

const audioRecorderPlayer = new AudioRecorderPlayer();

const AnasayfaG = () => {
    const navigation = useNavigation();

    const [secilenGorunum, setSecilenGorunum] = useState('Harita');

    const [isVisible, setIsVisible] = useState(false); // yeni durum değişkeni
    const [sesKayit, setsesKayit] = useState(false); // yeni durum değişkeni
    const bottomSheetModalRef = useRef(null);
    const sesKayitModalRef = useRef(null);

    // direkt yönlendirme yapar
    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    // bu 4ü ise bottomsheet için kullanıldı
    const handlePresentModalPress = () => {
        bottomSheetModalRef.current.present();
        setIsVisible(true);
    };

    const handleDismissModal = () => {
        setIsVisible(false); // alt sayfa kapatıldığında alt sayfayı görünmez yap
    };

    const sesKayitPress = () => {
        sesKayitModalRef.current.present();
        setsesKayit(true);
        setIsVisible(false); // alt sayfa kapatıldığında alt sayfayı görünmez yap
    };

    const sesKayitModal = () => {
        setsesKayit(false); // alt sayfa kapatıldığında alt sayfayı görünmez yap
    };

    // bu kısım ise tamammen ses kayıt için kulllanıldı

    const [recordSecs, setRecordSecs] = useState(0);
    const [recordTime, setRecordTime] = useState('00:00:00');
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        let intervalId;

        if (isRecording) {
            intervalId = setInterval(() => {
                const currentSecs = parseInt(recordTime.split(':')[1]);
                if (currentSecs >= 10) {
                    onStopRecord();
                    Alert.alert("Uyarı", "10 saniyeden fazla ses kaydı yapamazsınız");
                }
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isRecording, recordTime]);

    const onStartRecord = async () => {
        let result = await audioRecorderPlayer.startRecorder();
        audioRecorderPlayer.addRecordBackListener((e) => {
            setRecordSecs(e.currentPosition);
            setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
            return;
        });
        setIsRecording(true);
        console.log(result);
    };

    const onPauseRecord = async () => {
        if (!isPaused) {
            await audioRecorderPlayer.pauseRecorder();
        } else {
            await audioRecorderPlayer.resumeRecorder();
        }
        setIsPaused(!isPaused);
    };

    const onStopRecord = async () => {
        let result = await audioRecorderPlayer.stopRecorder();
        audioRecorderPlayer.removeRecordBackListener();
        setRecordSecs(0);
        setIsRecording(false);
        setIsPaused(false);
        console.log(result);
    };

    const onStartPlay = async () => {
        console.log('onStartPlay');
        let result = await audioRecorderPlayer.startPlayer();
        console.log(result);
    };

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff'
            }}>

                <UstMenu />

                <InstaStory />

                <Kurlar />

                <HosGeldin />

                <View style={{
                    flexDirection: 'row',
                    width: '98%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: 44,
                    backgroundColor: '#FFF',
                    borderRadius: 6,
                    paddingTop: 4,
                }}>
                    {/* Harita Görünümü */}
                    <TouchableOpacity style={{
                        height: 35,
                        width: '45%',
                        marginLeft: 13,
                        marginRight: 12,
                    }} onPress={() => setSecilenGorunum('Harita')}>
                        <View style={{
                            backgroundColor: secilenGorunum === 'Harita' ? '#8CB75E' : '#fff',
                            borderRadius: 3,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <HaritaSvg height={22} width={22} fill={secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f'} style={{
                                margin: 6,
                                marginLeft: 20
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

                <View style={{
                    left: 6,
                    marginTop: 40,
                    width: '100%',
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingTop: 20
                }}>

                    <AnasayfaSvg height={30} width={'18%'} style={{}} />

                    <HaberSvg height={30} width={'18%'} style={{}} />

                    <TouchableOpacity style={{ top: -50, marginLeft: 10, }} onPress={handlePresentModalPress}>
                        <GonderSvg />
                    </TouchableOpacity>

                    <KullaniciSvg height={30} width={'18%'} fill={'#B9B9B9'} style={{}} />

                    <AyarlarSvg height={30} width={'18%'} style={{}} />

                </View>



                <View style={{
                    width: '100%',
                    height: isVisible ? '45%' : '0%', // görünürlüğü kontrol et
                    zIndex: 1000,
                    position: 'absolute',
                    bottom: 0, // alt sayfanın ekranın altında başlamasını sağlar
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
                                            color: '#000',
                                            fontFamily: 'Nunito Sans',
                                            fontSize: 21,
                                            marginTop: 40,
                                            marginBottom: 10,
                                        }}>İçerik Gönder</Text>
                                        <Text style={{
                                            color: '#000',
                                            fontFamily: 'Nunito Sans',
                                            fontSize: 14,
                                            marginBottom: 20,
                                            fontVariant: 'light'
                                        }}>Çevrenizde gerçekleşen olayları bizimle paylaşarak uygulamayı kullanan diğer kullanıcıların da bu olaylardan haberdar olmasını sağlayabilirsiniz.</Text>

                                        <View style={{
                                            flexDirection: 'row'
                                        }}>
                                            <TouchableOpacity onPress={sesKayitPress} style={{
                                                width: '32%',
                                                height: 90,
                                                backgroundColor: '#AAD879',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 6,
                                                marginRight: 10,
                                            }}>
                                                <SesliMesajSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                                <Text style={{
                                                    color: '#fff',
                                                    fontFamily: 'Nunito Sans',
                                                    fontSize: 16,
                                                    fontVariant: 'Regular'
                                                }}>Ses Kaydı</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => handleMenuPress('FotografGonder')} style={{
                                                width: '32%',
                                                height: 90,
                                                backgroundColor: '#68BED2',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 6,
                                                marginRight: 10,
                                            }}>
                                                <GorselSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                                <Text style={{
                                                    color: '#fff',
                                                    fontFamily: 'Nunito Sans',
                                                    fontSize: 16,
                                                    fontVariant: 'Regular'
                                                }}>Fotoğraf</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity onPress={() => handleMenuPress('VideoGonder')} style={{
                                                width: '32%',
                                                height: 90,
                                                backgroundColor: '#EC8787',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 6,
                                                marginRight: 10,
                                            }}>
                                                <VideoSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                                <Text style={{
                                                    color: '#fff',
                                                    fontFamily: 'Nunito Sans',
                                                    fontSize: 16,
                                                    fontVariant: 'Regular'
                                                }}>Video</Text>
                                            </TouchableOpacity>

                                        </View>

                                    </View>


                                </View>
                            </View>
                        </BottomSheetModal>

                    </BottomSheetModalProvider>
                </View>





                <View style={{
                    width: '100%',
                    height: sesKayit ? '83%' : '0%', // görünürlüğü kontrol et
                    zIndex: 1000,
                    position: 'absolute',
                    bottom: 0, // alt sayfanın ekranın altında başlamasını sağlar
                }}>

                    <BottomSheetModalProvider>

                        <BottomSheetModal
                            ref={sesKayitModalRef}
                            snapPoints={['90%']}
                            onDismiss={sesKayitModal}
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
                                        width: '100%',
                                        height: 625,
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
                                                color: '#000',
                                                fontFamily: 'Nunito Sans',
                                                fontSize: 21,
                                                marginTop: 40,
                                                marginBottom: 10,
                                            }}>Ses Kaydı Gönder</Text>
                                            <Text style={{
                                                color: '#000',
                                                fontFamily: 'Nunito Sans',
                                                fontSize: 14,
                                                marginBottom: 20,
                                                fontVariant: '400'
                                            }}>Yaşadığınız olayın ses kaydını göndererek kullanıcıları bilgilendirebilirsiniz.
                                                Mevcut üyelik seviyenizde tek seferde en fazla <Text style={{ color: '#8CB75E', fontWeight: 'bold' }}>10 saniyelik</Text> ses kayıtları gönderebilirsiniz.</Text>

                                            <View style={{
                                                width: '100%',
                                                height: 75,
                                                marginTop: 20
                                            }}>
                                                <TitresimSvg height={'100%'} width={'100%'} />
                                            </View>

                                            <View style={{
                                                width: '100%',
                                                height: 70,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    color: '#000',
                                                    fontFamily: 'Nunito Sans',
                                                    fontSize: 23,
                                                    fontVariant: 'light'
                                                }}>{recordTime}</Text>
                                            </View>

                                            <View style={{
                                                alignItems: 'center'
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <TouchableOpacity onPress={onPauseRecord} style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <View style={{
                                                            height: 50,
                                                            width: 50,
                                                            borderWidth: 2,
                                                            borderRadius: 50,
                                                            borderColor: '#000',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <DuraklatSvg height={25} width={25} fill={'#000'} />
                                                        </View>
                                                        <Text style={{
                                                            color: '#000',
                                                            width: 80,
                                                            fontFamily: 'Nunito Sans',
                                                            fontSize: 15,
                                                            fontVariant: 'light',
                                                            marginTop: 5,
                                                            textAlign: 'center'
                                                        }}>{isPaused ? 'Devam Ettir' : 'Duraklat'}</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity onPress={onStartRecord} style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginLeft: 35,
                                                        marginRight: 35
                                                    }}>
                                                        <View style={{
                                                            height: 65,
                                                            width: 65,
                                                            borderWidth: 2,
                                                            borderRadius: 50,
                                                            borderColor: '#C43030',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <View style={{
                                                                width: '90%',
                                                                height: '90%',
                                                                backgroundColor: '#C43030',
                                                                borderRadius: 50,

                                                            }} />
                                                        </View>
                                                        <Text style={{
                                                            color: '#000',
                                                            fontFamily: 'Nunito Sans',
                                                            fontSize: 15,
                                                            fontVariant: 'light',
                                                            marginTop: 5
                                                        }}>Kayıt</Text>
                                                    </TouchableOpacity>

                                                    <TouchableOpacity onPress={onStopRecord} style={{
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <View style={{
                                                            height: 50,
                                                            width: 50,
                                                            borderWidth: 2,
                                                            borderRadius: 50,
                                                            borderColor: '#000',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <View style={{
                                                                width: '50%',
                                                                height: '50%',
                                                                backgroundColor: '#000',
                                                                borderRadius: 4,
                                                            }} />
                                                        </View>
                                                        <Text style={{
                                                            color: '#000',
                                                            fontFamily: 'Nunito Sans',
                                                            fontSize: 15,
                                                            fontVariant: 'light',
                                                            marginTop: 5
                                                        }}>Durdur</Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </View>

                                            <View style={{
                                                marginTop: 35
                                            }}>
                                                <TouchableOpacity onPress={onStartPlay} style={{
                                                    borderRadius: 8,
                                                    width: '100%',
                                                    height: 55,
                                                    borderWidth: 2,
                                                    borderColor: '#8CB75E',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        color: '#646464',
                                                        fontFamily: 'Nunito Sans',
                                                        fontSize: 18,
                                                        fontVariant: 'light',
                                                    }}>Kaydı Dinle</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity onPress={() => handleMenuPress('GondermeDetay')} style={{
                                                    width: '100%',
                                                    height: 55,
                                                    backgroundColor: '#8CB75E',
                                                    borderRadius: 8,
                                                    marginTop: 20,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <Text style={{
                                                        color: '#fff',
                                                        fontFamily: 'Nunito Sans',
                                                        fontSize: 18,
                                                        fontVariant: 'light',
                                                    }}>Gönder</Text>
                                                </TouchableOpacity>

                                            </View>

                                        </View>
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

export default AnasayfaG