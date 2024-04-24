import { View, Text, TouchableOpacity, Image, Button, Alert } from 'react-native'
// import { RNCamera } from 'react-native-camera';
// import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraType } from 'react-native-camera-kit';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useState, useEffect } from 'react'

import GeriSvg from '../svg/GeriSvg'
import KameraSvg from '../svg/KameraSvg'
import TekrarSvg from '../svg/TekrarSvg'

const FotografGonder = () => {
    const [photos, setPhotos] = useState([]);
    const [cameraPermission, setCameraPermission] = useState(null); // Başlangıçta null olarak ayarlayın
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
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

    const takePhoto = () => {
        if (photos.length < 3) {
            CameraKitCamera.openCamera({
                // Kamera ayarlarını buraya ekleyin
            }).then((response) => {
                if (response.uri) {
                    setPhotos([...photos, response.uri]);
                }
            }).catch((error) => {
                console.log('Kamera hatası:', error);
            });
        } else {
            Alert.alert('Hata', 'En fazla 3 fotoğraf çekebilirsiniz.', [{ text: 'Tamam' }]);
        }
    };

    const deletePhoto = (index) => {
        const newPhotos = [...photos];
        newPhotos.splice(index, 1);
        setPhotos(newPhotos);
    };

    // Fotoğraf bileşeni
    const PhotoItem = ({ uri, index }) => {
        return (
            <TouchableOpacity onPress={() => deletePhoto(index)}>
                <Image source={{ uri }} style={{
                    width: 55,
                    height: 55,
                    borderRadius: 9,
                    backgroundColor: '#DEDEDE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 5,
                }} />
            </TouchableOpacity>
        );
    };

    // Kamera izni henüz alınmadıysa, izin isteğini bekleyin
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
                    top: 50
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

                            <Camera
                                ref={(ref) => (this.camera = ref)}
                                cameraType={CameraType.Back} // front/back(default)
                                flashMode='auto'
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                }}
                            />


                            {/* bu kısım ise buna basınca bütün çekilen Fotoğrafları silecek */}
                            <TekrarSvg height={30} width={30} style={{
                                marginLeft: 'auto',
                                right: 20,
                                top: 30
                            }} />

                            {/* bu 3 kısımda bir biri ile aynı mantıkta her çekilen fotoğraf her birine gelecek  */}
                            <View style={{
                                width: 65,
                                height: 65,
                                top: 325,
                                marginLeft: 'auto',
                                right: 20,
                                borderRadius: 12,
                                borderWidth: 1,
                                borderColor: '#8CB75E',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: '#C42626',
                                    color: '#fff',
                                    fontSize: 15,
                                    borderRadius: 50,
                                    textAlign: 'center',
                                    marginLeft: 'auto',
                                    right: -10,
                                    top: -5
                                }}>
                                    X
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                                    {photos.map((photo, index) => (
                                        <PhotoItem key={index} uri={photo} index={index} />
                                    ))}
                                </View>
                            </View>

                            <View style={{
                                width: 65,
                                height: 65,
                                top: 340,
                                marginLeft: 'auto',
                                right: 20,
                                borderRadius: 12,
                                borderWidth: 1,
                                borderColor: '#8CB75E',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: '#C42626',
                                    color: '#fff',
                                    fontSize: 15,
                                    borderRadius: 50,
                                    textAlign: 'center',
                                    marginLeft: 'auto',
                                    right: -10,
                                    top: -5
                                }}>
                                    X
                                </Text>
                                <View style={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: 9,
                                    backgroundColor: '#DEDEDE',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: -10
                                }}>

                                </View>
                            </View>

                            <View style={{
                                width: 65,
                                height: 65,
                                top: 355,
                                marginLeft: 'auto',
                                right: 20,
                                borderRadius: 12,
                                borderWidth: 1,
                                borderColor: '#8CB75E',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: '#C42626',
                                    color: '#fff',
                                    fontSize: 15,
                                    borderRadius: 50,
                                    textAlign: 'center',
                                    marginLeft: 'auto',
                                    right: -10,
                                    top: -5
                                }}>
                                    X
                                </Text>
                                <View style={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: 9,
                                    backgroundColor: '#DEDEDE',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    top: -10
                                }}>

                                </View>
                            </View>

                        </View>
                    )}
                    {/* bu kısım ise buna basınca fotoğrafı çekecek */}
                    <TouchableOpacity onPress={takePhoto} style={{
                        backgroundColor: '#8CB75E',
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
                        <KameraSvg fill={'#fff'} height={30} width={30} />
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

                </View>
            </View>
        </>
    )
}

export default FotografGonder