import { View, Text, Image } from 'react-native'
import React from 'react'
import MenuSvg from '../svg/MenuSvg'
import BildirimSvg from '../svg/BildirimSvg'

const UstMenu = () => {
    return (
        <>
            <View style={{
                width: '100%',
                height: 120,
            }}>
                <View style={{
                    width: '100%',
                    height: 120,
                    left: 25,
                    right: 25,
                    top: 50,
                    flexDirection: 'row',
                }}>

                    <View style={{ marginRight: 'auto' }}>
                        <MenuSvg height={25} width={25} fill={'#000'} />
                    </View>

                    <View style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        <Image source={require("../img/logo.png")} />
                    </View>

                    <View style={{ marginLeft: 'auto', marginRight: 55 }}>
                        <BildirimSvg width={32} height={32} />
                    </View>

                </View>
            </View>
        </>
    )
}

export default UstMenu