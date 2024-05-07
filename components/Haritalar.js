import { View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const Haritalar = () => {
    return (
        <>
            <View style={{
                width: '95%',
                height: 215,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <MapView
                    style={{ flex: 1 }}
                    provider={MapView.PROVIDER_GOOGLE} // Google Haritalar sağlayıcısını kullan
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                        title={"Marker Title"}
                        description={"Marker Description"}
                    />
                </MapView>
            </View>
        </>
    )
}

export default Haritalar