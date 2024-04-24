import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const YeniKayitSvg = ({ style, width, height, fill }) => {
    return (
        <Svg fill={fill} style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.68 24.034">
            <G id="add-user-left-6-svgrepo-com_1_" data-name="add-user-left-6-svgrepo-com (1)" transform="translate(-5.319 -2.308)">
                <Path id="secondary" d="M10.5,6.749H3M6.749,10.5V3" transform="translate(3.069 0.058)" fill="none" stroke="#8cb75e" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                <Path id="primary" d="M11.674,3.517A6.439,6.439,0,0,1,14.194,3,6.3,6.3,0,1,1,8.41,11.821" transform="translate(4.123 0.058)" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" />
                <Path id="primary-2" data-name="primary" d="M13.821,13h2.52a8.821,8.821,0,0,1,8.821,8.821h0a1.26,1.26,0,0,1-1.26,1.26H6.26A1.26,1.26,0,0,1,5,21.821H5A8.821,8.821,0,0,1,13.821,13Z" transform="translate(3.236 2.66)" fill="none" stroke="#191919" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" />
            </G>
        </Svg>
    )
}

export default YeniKayitSvg