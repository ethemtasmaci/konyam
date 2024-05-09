import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const TekrarSvg = ({ style, width, height, fill }) => {
    return (
        <Svg fill={fill} style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.724 30.729">
            <Path id="reload-ui-svgrepo-com" d="M31.723,16.363A15.347,15.347,0,1,1,24.576,3.376l1.97-1.97A1.4,1.4,0,0,1,28.93,2.4V7.984a1.4,1.4,0,0,1-1.4,1.4H21.948A1.4,1.4,0,0,1,20.961,7l1.574-1.574a12.429,12.429,0,0,0-6.173-1.628A12.569,12.569,0,1,0,28.93,16.363a1.4,1.4,0,1,1,2.793,0Z" transform="translate(-1 -0.996)" fill="#8cb75e" />
        </Svg>
    )
}

export default TekrarSvg