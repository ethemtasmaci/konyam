import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const MenuSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.8 20">
            <Path id="Vector" d="M15.2,24H28.8M5,15.5H28.8M15.2,7H28.8" transform="translate(-3.5 -5.5)" fill={fill} stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
        </Svg>
    )
}

export default MenuSvg