import { View, Text, TouchableOpacity, Image, Button, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useState, useEffect, useRef } from 'react'

import GeriSvg from '../svg/GeriSvg'
import KameraSvg from '../svg/KameraSvg'
import TekrarSvg from '../svg/TekrarSvg'
import UyariSvg from '../svg/UyariSvg';

const VideoGonder = () => {
    const [photos, setPhotos] = useState([]);
    const [cameraPermission, setCameraPermission] = useState(null); // Başlangıçta null olarak ayarlayın
    const [isRecording, setIsRecording] = useState(false);
    const cameraRef = useRef(null);
    const [videoUri, setVideoUri] = useState(null);
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    const resetPhotos = () => {
        setPhotos([]);
    };

    useEffect(() => {
        checkCameraPermission();
    }, []);

    const checkCameraPermission = () => {
        check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
                setCameraPermission(result);
                if (result !== RESULTS.GRANTED) {
                    requestCameraPermission();
                }
            })
            .catch((error) => {
                console.log('İzin kontrol hatası:', error);
            });
    };

    const requestCameraPermission = () => {
        request(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
                setCameraPermission(result);
            })
            .catch((error) => {
                console.log('İzin isteği hatası:', error);
            });
    };

    const startRecording = async () => {
        if (!isRecording && cameraRef.current) {
            try {
                if (cameraRef.current.isRecording) {
                    console.log('Başka bir kayıt çalışıyor lütfen durdurun ve tekrar deneyin.');
                    await stopRecording(); // Mevcut kayıt işlemini durdur
                }
                const { uri } = await cameraRef.current.recordAsync({ maxDuration: 10 }); // Maksimum süre 10 saniye olarak ayarlandı
                console.log('Video Url: ', uri);
                setVideoUri(uri); // Video URL'sini state'e kaydet
                setIsRecording(true);
                // Kayıt başladıktan 10 saniye sonra otomatik olarak kaydı durdur
                setTimeout(stopRecording, 10000);
            } catch (error) {
                console.error('Video Kayıt Hatası: ', error);
            }
        } else {
            console.log('Başka bir kayıt işlemi zaten devam ediyor.');
        }
    };



    // const startRecording = async () => {
    //     if (!isRecording && cameraRef.current) {
    //         try {
    //             if (cameraRef.current.isRecording) {
    //                 console.log('Başka bir kayıt çalışıyor lütfen durdurun ve tekrar deneyin.');
    //                 await stopRecording(); // Mevcut kayıt işlemini durdur
    //             }
    //             const { uri } = await cameraRef.current.recordAsync({ maxDuration: 10 }); // Maksimum süre 10 saniye olarak ayarlandı
    //             console.log('Video Url: ', uri);
    //             setVideoUri(uri); // Video URL'sini state'e kaydet
    //             setIsRecording(true);
    //             // Kayıt başladıktan 10 saniye sonra otomatik olarak kaydı durdur
    //             setTimeout(stopRecording, 10000);
    //         } catch (error) {
    //             console.error('Video Kayıt Hatası: ', error);
    //         }
    //     }
    // };

    // const stopRecording = async () => {
    //     if (isRecording && cameraRef.current) {
    //         try {
    //             const recordingStopped = await cameraRef.current.stopRecording();
    //             console.log('Kayıt durduruldu: ', recordingStopped);
    //             setIsRecording(false);
    //         } catch (error) {
    //             console.error('Kayıt durdurma hatası: ', error);
    //         }
    //     }
    // };

    const stopRecording = async () => {
        if (cameraRef.current) {
            await cameraRef.current.stopRecording();
            console.log('Kayıt durduruldu: ');
            setIsRecording(false);
        }
    };

    // const takeVideo = async () => {
    //     if (!isRecording && cameraRef.current) {
    //         startRecording();
    //     } else {
    //         stopRecording();
    //     }
    // };

    const toggleRecording = () => {
        if (isRecording) {
            stopRecording(); // Kaydı durdur
        } else {
            startRecording(); // Kayıt başlat
        }
    };

    const deletePhoto = () => {
        setVideoUri(null); // Videoyu null olarak ayarla
    };


    if (cameraPermission !== RESULTS.GRANTED) {
        return (
            <View style={{
                backgroundColor: '#ffff',
                width: '100%',
                height: '100%',
            }}>
                <View style={{
                    width: '90%',
                    left: 20,
                    right: 15,
                    top: 50
                }}>
                    <Text>Kamera erişim izni gerekiyor.</Text>
                    <Button title="İzni İste" onPress={requestCameraPermission} />
                </View>
            </View>
        );
    }

    return (
        <>
            <View style={{
                backgroundColor: '#ffff',
                width: '100%',
                height: '100%',
            }}>
                <View style={{
                    width: '90%',
                    left: 20,
                    right: 15,
                    top: 30,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        top: 40,
                    }}>
                        <TouchableOpacity onPress={() => handleMenuPress('IcerikGonder')}>
                            <GeriSvg height={30} width={30} fiil={'#fff'} />
                        </TouchableOpacity>

                        <Image style={{ marginLeft: 'auto', marginRight: 'auto', height: 50, width: 180 }} source={require("../img/logo.png")} />
                    </View>

                    {/* bu alana camera alanı olacak yani kamera burda gözükecek ve direkt height ve width 100% kaplıyacak 
                    böylece camera tam oturacak */}

                    {cameraPermission === RESULTS.GRANTED && (
                        <View style={{
                            width: '100%',
                            height: 600,
                            borderWidth: 1,
                            borderColor: '#8CB75E',
                            borderRadius: 12,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginTop: 70,
                            position: 'relative'
                        }}>

                            <RNCamera
                                ref={cameraRef}
                                type={RNCamera.Constants.Type.back}
                                flashMode={RNCamera.Constants.FlashMode.auto}
                                autoFocus={RNCamera.Constants.AutoFocus.on}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                }}
                            />


                            {/* bu kısım ise buna basınca bütün çekilen Fotoğrafları silecek */}
                            <TouchableOpacity onPress={resetPhotos}>
                                <TekrarSvg
                                    height={30}
                                    width={30}
                                    style={{
                                        marginLeft: 'auto',
                                        right: 20,
                                        top: 30
                                    }}
                                />
                            </TouchableOpacity>

                            {videoUri && (
                                <View style={{
                                    width: 65,
                                    height: 65,
                                    top: 325,
                                    marginLeft: 'auto',
                                    right: 5,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: '#8CB75E',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15
                                }}>
                                    <TouchableOpacity onPress={deletePhoto}>
                                        <Text style={{
                                            width: 20,
                                            height: 20,
                                            backgroundColor: '#C42626',
                                            color: '#fff',
                                            fontSize: 15,
                                            borderRadius: 50,
                                            textAlign: 'center',
                                            marginLeft: 'auto',
                                            right: -25,
                                            top: -13,
                                            zIndex: 100,
                                        }}>
                                            X
                                        </Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Video
                                            source={{ uri: videoUri }}
                                            style={{
                                                width: 55,
                                                height: 55,
                                                borderRadius: 9,
                                                backgroundColor: '#DEDEDE',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: -20,
                                                zIndex: 1
                                            }}
                                            controls={true}
                                            paused={true}
                                        />
                                    </View>
                                </View>
                            )}


                        </View>
                    )}
                    {/* bu kısım ise buna basınca fotoğrafı çekecek */}
                    {/* <TouchableOpacity onPress={toggleRecording} style={{ */}
                    <TouchableOpacity onPress={isRecording ? stopRecording : startRecording} style={{
                        backgroundColor: '#B51616',
                        width: 70,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 50,
                        position: 'absolute',
                        bottom: 20,
                        alignSelf: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2,
                        elevation: 5
                    }}>
                        {isRecording ?
                            <View style={{
                                width: '40%',
                                height: '40%',
                                borderRadius: 8,
                                backgroundColor: '#FFF'
                            }} /> : <View style={{
                                width: '60%',
                                height: '60%',
                                borderRadius: 30,
                                backgroundColor: '#FFF'
                            }} />}

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleMenuPress('GondermeDetay')} style={{
                        backgroundColor: '#8CB75E',
                        width: '100%',
                        height: 55,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 45
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Nunito Sans',
                            fontSize: 18,
                            fontVariant: 'Regular'
                        }}>Sonraki Aşama</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

export default VideoGonder