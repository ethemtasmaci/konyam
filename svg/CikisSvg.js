import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const CikisSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.137 13.137">
            <G id="Interface_Exit" data-name="Interface / Exit" transform="translate(0.5 0.5)">
                <Path id="Vector" d="M10.068,12.344l2.276-2.276m0,0L10.068,7.793m2.276,2.276H4m0-3.6V6.428a3.771,3.771,0,0,1,.165-1.6,1.516,1.516,0,0,1,.663-.663A3.771,3.771,0,0,1,6.428,4H13.71a3.766,3.766,0,0,1,1.6.165,1.518,1.518,0,0,1,.664.663,3.764,3.764,0,0,1,.165,1.6v7.287a3.76,3.76,0,0,1-.165,1.6,1.519,1.519,0,0,1-.664.663,3.76,3.76,0,0,1-1.6.165H6.425a3.764,3.764,0,0,1-1.6-.165,1.518,1.518,0,0,1-.663-.663A3.767,3.767,0,0,1,4,13.71v-.038" transform="translate(-4 -4)" fill="none" stroke="#9b9b9b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" />
            </G>
        </Svg>
    )
}

export default CikisSvg