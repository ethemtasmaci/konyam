import { View, Text } from 'react-native'
import React from 'react'
import KayitsizBildirimSvg from '../svg/KayitsizBildirimSvg'

const GirisPanel = () => {
  return (
    <>
      <View style={{
        width: '100%'
      }}>

        <View style={{
          width: '97%',
          height: 92,
          backgroundColor: '#F7F7F7',
          borderRadius: 3,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <View style={{
            width: '100%',
            height: 5,
            backgroundColor: '#8CB75E',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }} />
          <View style={{
            flexDirection: 'row',
            marginTop: 11
          }}>
            <View style={{
              width: '20%',
              marginLeft: 15,
              marginTop: 5
            }}><KayitsizBildirimSvg height={50} width={50} /></View>
            <View style={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <Text style={{ fontSize: 15, fontFamily: 'Nunito Sans' }}>Uygulamada sunduğumuz özelliklerin tamamından
                faydalanabilmeniz için <Text style={{ fontWeight: 'bold' }}>kayıt olmalı</Text> veya <Text style={{ fontWeight: 'bold' }}>giriş yapmalısınız</Text>.</Text>
            </View>
          </View>
        </View>

      </View>
    </>
  )
}

export default GirisPanel