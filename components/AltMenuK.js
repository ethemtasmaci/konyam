import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';

import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberSvg from '../svg/HaberSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import AyarlarSvg from '../svg/AyarlarSvg'
import GonderSvg from '../svg/GonderSvg'

const AltMenuK = () => {
  const navigation = useNavigation();

  const handleMenuPress = (screenName) => {
    navigation.navigate(screenName); // İlgili sayfaya yönlendir
  };

  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current.present();
  };

  return (
    <>
     
    </>
  )
}

export default AltMenuK