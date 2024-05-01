import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const KonumSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.797 23.33">
            <Path id="location-pin-svgrepo-com_1_" data-name="location-pin-svgrepo-com (1)" d="M16.3,0A8.3,8.3,0,0,0,8,8.3a8.169,8.169,0,0,0,1.575,4.817c.018.033.02.069.04.1l5.532,8.3a1.383,1.383,0,0,0,2.3,0l5.532-8.3c.02-.031.023-.067.04-.1A8.169,8.169,0,0,0,24.6,8.3,8.3,8.3,0,0,0,16.3,0Zm0,11.065A2.766,2.766,0,1,1,19.065,8.3,2.766,2.766,0,0,1,16.3,11.065Z" transform="translate(-7.4 0.6)" fill="none" stroke={fill} stroke-width="1.2" />
        </Svg>
    )
}

export default KonumSvg