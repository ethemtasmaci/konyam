import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const KullaniciSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.574 28.5">
            <G id="user-svgrepo-com_1_" data-name="user-svgrepo-com (1)" transform="translate(0.731 1)">
                <Path id="Path_18" data-name="Path 18" d="M20.7,9.35A6.35,6.35,0,1,1,14.35,3,6.35,6.35,0,0,1,20.7,9.35Z" transform="translate(-1.949 -3)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <Path id="Path_19" data-name="Path 19" d="M16.787,14C10.277,14,5,18.584,5,24.239H28.574C28.574,18.584,23.3,14,16.787,14Z" transform="translate(-4.731 2.261)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </G>
        </Svg>
    )
}

export default KullaniciSvg