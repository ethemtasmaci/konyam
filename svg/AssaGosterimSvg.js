import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const AssaGosterimSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.956 9.774">
            <Path id="arrow-up-svgrepo-com" d="M22.947,17.773a1.361,1.361,0,0,0,0-1.924L16.29,9.2a2.721,2.721,0,0,0-3.848,0L5.788,15.854a1.361,1.361,0,1,0,1.924,1.924l5.7-5.7a1.361,1.361,0,0,1,1.924,0l5.69,5.69A1.361,1.361,0,0,0,22.947,17.773Z" transform="translate(23.345 18.177) rotate(180)" fill={fill} />
        </Svg>
    )
}

export default AssaGosterimSvg