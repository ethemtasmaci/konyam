import { View, Text, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraScreen, CameraType } from 'react-native-camera-kit';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useState, useEffect, useRef } from 'react';

import GeriSvg from '../svg/GeriSvg'
import KameraSvg from '../svg/KameraSvg'
import TekrarSvg from '../svg/TekrarSvg'
import UyariSvg from '../svg/UyariSvg';

const VideoGonder = () => {
    const [videos, setVideos] = useState([]); // Video listesi
    const [cameraPermission, setCameraPermission] = useState(null);
    const navigation = useNavigation();
    const cameraRef = useRef(null);

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

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName);
    };

    const resetVideos = () => {
        setVideos([]);
    };

    const onVideoRecorded = (videoUri) => {
        if (videos.length < 3) {
            setVideos([...videos, videoUri]);
        } else {
            Alert.alert('Hata', 'En fazla 3 video kaydedebilirsiniz.', [{ text: 'Tamam' }]);
            console.log('Hata, 3 video kaydedildi.');
        }
    };

    const deleteVideo = (index) => {
        const newVideos = [...videos];
        newVideos.splice(index, 1);
        setVideos(newVideos);
    };

    const renderVideos = () => {
        return videos.map((video, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => deleteVideo(index)}>
                    <Text style={{ fontSize: 18, color: 'red', marginRight: 10 }}>X</Text>
                </TouchableOpacity>
                <Text>{video}</Text> {/* Video URI veya önizleme */}
            </View>
        ));
    };

    if (cameraPermission !== RESULTS.GRANTED) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Kamera erişim izni gerekiyor.</Text>
                <Button title="İzni İste" onPress={requestCameraPermission} />
            </View>
        );
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => handleMenuPress('IcerikGonder')}>
                        <GeriSvg height={30} width={30} fiil={'#000'} />
                    </TouchableOpacity>
                    <Image source={require("../img/logo.png")} style={{ flex: 1, height: 50, resizeMode: 'contain' }} />
                </View>
                <View style={{ flex: 1 }}>
                    <CameraScreen
                        ref={cameraRef}
                        cameraOptions={{
                            flashMode: 'auto',
                            focusMode: 'on',
                            zoomMode: 'on',
                            ratioOverlay: '1:1',
                            ratioOverlayColor: '#00000077',
                        }}
                        onReadCode={() => { }}
                        showFrame={true}
                        scanBarcode={false}
                        laserColor={'red'}
                        frameColor={'yellow'}
                        surfaceColor={'black'}
                        cameraFillMode={'fit'}
                        captureAudio={true}
                        onCapture={(videoUri) => onVideoRecorded(videoUri)}
                    />
                </View>

                {/* bu kısımda ise 3 tane farklı video için ayarlanmış anandır zaten yönlendirmesi mevcut  */}
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    {renderVideos()}
                </View>

            </View>
            {/* bu kısma basınca video başlıyacak tekrar basıldığında video duracak kaç saniye olduğu yazmıyacak ancak 
                    10 saniyeden de fazla olmaz bunu engellemende gerek */}
            <TouchableOpacity onPress={takePhoto} style={{
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
                <View style={{
                    width: '40%',
                    height: '40%',
                    borderRadius: 8,
                    backgroundColor: '#FFF'
                }} />
            </TouchableOpacity>

            <View style={{
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
            </View>

        </>
    )
}

export default VideoGonder