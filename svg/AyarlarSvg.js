import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const AyarlarSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.5 28.5">
            <G id="cog-svgrepo-com" transform="translate(-2.025 -2.025)">
                <Path id="Path_20" data-name="Path 20" d="M13.7,4.742A2.8,2.8,0,0,1,9.946,6.2,2.826,2.826,0,0,0,6.2,9.946,2.8,2.8,0,0,1,4.742,13.7a2.791,2.791,0,0,0,0,5.152A2.8,2.8,0,0,1,6.2,22.6,2.826,2.826,0,0,0,9.946,26.35,2.8,2.8,0,0,1,13.7,27.808a2.791,2.791,0,0,0,5.152,0A2.8,2.8,0,0,1,22.6,26.35,2.826,2.826,0,0,0,26.35,22.6a2.8,2.8,0,0,1,1.458-3.752,2.791,2.791,0,0,0,0-5.152A2.8,2.8,0,0,1,26.35,9.946,2.826,2.826,0,0,0,22.6,6.2a2.8,2.8,0,0,1-3.752-1.458A2.791,2.791,0,0,0,13.7,4.742Z" fill="none" stroke="#b9b9b9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <Path id="Path_21" data-name="Path 21" d="M17.858,13.429A4.429,4.429,0,1,1,13.429,9,4.429,4.429,0,0,1,17.858,13.429Z" transform="translate(2.846 2.846)" fill="none" stroke="#b9b9b9" stroke-width="2" />
            </G>
        </Svg>
    )
}

export default AyarlarSvg