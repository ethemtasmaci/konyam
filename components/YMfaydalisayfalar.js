import { View, Text } from 'react-native'
import React from 'react'
import KonyamSosyalSvg from '../svg/KonyamSosyalSvg'
import ReklamVerinSvg from '../svg/ReklamVerinSvg'
import SikcaSorulanSorularSvg from '../svg/SikcaSorulanSorularSvg'
import HakkindaSvg from '../svg/HakkindaSvg'
import BizeUlasinSvg from '../svg/BizeUlasinSvg'
import SoruIsareti from '../svg/SoruIsareti'

const YMfaydalisayfalar = () => {
  return (
    <>
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
      }}>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <ReklamVerinSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5,

          }}>Reklam Verin</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30,
        }}>
          <SikcaSorulanSorularSvg height={40} width={40} style={{ marginLeft: 40, zIndex: 1, position: 'relative', }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Sıkça Sorulan Sorular</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <HakkindaSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Hakkımızda</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <BizeUlasinSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Bize Ulaşın</Text>
        </View>

      </View>
    </>
  )
}

export default YMfaydalisayfalar