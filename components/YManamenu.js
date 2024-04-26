import { View, Text } from 'react-native'
import React from 'react'
import KonyamSosyalSvg from '../svg/KonyamSosyalSvg'
import { forSlideLeft } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators'
import KonyamFirsatSvg from '../svg/KonyamFirsatSvg'
import KonyamIlanSvg from '../svg/KonyamIlanSvg'
import KonyamRehberSvg from '../svg/KonyamRehberSvg'
import KonyamStoreSvg from '../svg/KonyamStoreSvg'
import KonyamEtkinlikSvg from '../svg/KonyamEtkinlikSvg'
import KonyamKazandiranSvg from '../svg/KonyamKazandiranSvg'

const YManamenu = () => {
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
          <KonyamSosyalSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Konyam Sosyal</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamFirsatSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Kazandıran Fırsatlar</Text>
        </View>


        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamIlanSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Konyam İlan</Text>
        </View>


        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamRehberSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Şehir Rehberi</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamStoreSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Konyam Store</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamEtkinlikSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Etkinlik Bülteni</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 30
        }}>
          <KonyamKazandiranSvg height={40} width={40} style={{ marginLeft: 40 }} />
          <Text style={{
            color: '#000',
            fontFamily: 'Nunito Sans',
            fontSize: 18,
            fontWeight: 'regular',
            marginLeft: 20,
            marginTop: 5
          }}>Kazandıran Oyunlar</Text>
        </View>

      </View>
    </>
  )
}

export default YManamenu