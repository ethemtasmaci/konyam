import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const GorSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.497 8.397">
            <G id="eye-svgrepo-com_2_" data-name="eye-svgrepo-com (2)" transform="translate(-2 -4)">
                <Path id="Path_211" data-name="Path 211" d="M9.75,10.931a1.181,1.181,0,1,1,1.181,1.181A1.181,1.181,0,0,1,9.75,10.931Z" transform="translate(-3.683 -2.732)" fill="#fff" />
                <Path id="Path_212" data-name="Path 212" d="M2,8.2a2.31,2.31,0,0,0,.669,1.73A5.78,5.78,0,0,0,7.248,12.4a5.78,5.78,0,0,0,4.579-2.469A2.31,2.31,0,0,0,12.5,8.2a2.31,2.31,0,0,0-.669-1.73A5.78,5.78,0,0,0,7.248,4,5.78,5.78,0,0,0,2.669,6.469,2.31,2.31,0,0,0,2,8.2ZM7.248,6.231A1.968,1.968,0,1,0,9.216,8.2,1.968,1.968,0,0,0,7.248,6.231Z" fill="#fff" fill-rule="evenodd" />
            </G>
        </Svg>
    )
}

export default GorSvg