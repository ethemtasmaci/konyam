import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { AudioRecorder, AudioUtils } from 'react-native-audio';
import { AudioRecorderPlayer } from 'react-native-audio-recorder-player';
import { View, Text, TouchableOpacity, Button } from 'react-native'

const audioRecorderPlayer = new AudioRecorderPlayer();

import AnasayfaG from '../src/AnasayfaG';
import SesliMesajSvg from '../svg/SesliMesajSvg';
import GorselSvg from '../svg/GorselSvg';
import VideoSvg from '../svg/VideoSvg';

const SesKayitGonder = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    const [isRecording, setIsRecording] = useState(false);
    const [recordedFilePath, setRecordedFilePath] = useState('');
    const [duration, setDuration] = useState(0);

    const onStartRecording = async () => {
        const path = 'test.aac';
        try {
            await audioRecorderPlayer.startRecorder(path);
            audioRecorderPlayer.addRecordBackListener((e) => {
                setDuration(Math.floor(e.current_position / 1000));
                return;
            });
            setIsRecording(true);
            setRecordedFilePath(path);
        } catch (error) {
            console.error(error);
        }
    };

    const onStopRecording = async () => {
        try {
            await audioRecorderPlayer.stopRecorder();
            setIsRecording(false);
        } catch (error) {
            console.error(error);
        }
    };

    const onPlayRecordedSound = async () => {
        try {
            await audioRecorderPlayer.startPlayer(recordedFilePath);
        } catch (error) {
            console.error(error);
        }
    };

    const onStopPlayingSound = async () => {
        try {
            await audioRecorderPlayer.stopPlayer();
        } catch (error) {
            console.error(error);
        }
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

                        <View>
                            <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={isRecording ? onStopRecording : onStartRecording} />
                            <Button title="Play Recorded Sound" onPress={onPlayRecordedSound} />
                            <Button title="Stop Playing Sound" onPress={onStopPlayingSound} />
                            <Text>{`Duration: ${duration} seconds`}</Text>
                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default SesKayitGonder