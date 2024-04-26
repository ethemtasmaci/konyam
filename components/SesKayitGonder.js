import { View, Text, TouchableOpacity, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

import AnasayfaG from '../src/AnasayfaG';
import SesliMesajSvg from '../svg/SesliMesajSvg';
import GorselSvg from '../svg/GorselSvg';
import VideoSvg from '../svg/VideoSvg';
import DuraklatSvg from '../svg/DuraklatSvg';
import TitresimSvg from '../svg/TitresimSvg';

const audioRecorderPlayer = new AudioRecorderPlayer();

const SesKayitGonder = () => {
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
            <View style={{
                width: '100%'
            }}>
                <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000',
                        opacity: 0.18,
                        zIndex: 1,
                        position: 'relative'
                    }}>
                        <AnasayfaG />
                    </View>
                </TouchableOpacity>
                <View style={{
                    marginTop: '66%',
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
                        {/* bu kısım sürekleme kısmı buna basılı tutan kullanıcı bu kısımı alt tarafa doğru sürükleye bilecek */}
                        <View style={{
                            width: 85,
                            height: 5,
                            backgroundColor: '#F2F2F2',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            top: 20
                        }} />
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

                            <TouchableOpacity style={{
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
        </>
    )
}

export default SesKayitGonder