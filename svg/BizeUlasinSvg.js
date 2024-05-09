import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Tspan, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const BizeUlasinSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_149" data-name="Group 149" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.09)" fill="#8cb75e" />
            <G id="envelope-svgrepo-com_1_" data-name="envelope-svgrepo-com (1)" transform="translate(11.478 11.051)">
                <Path id="Path_227" data-name="Path 227" d="M1.6,3.945A2.359,2.359,0,0,1,3.488,3H16.073a2.359,2.359,0,0,1,1.886.945L9.781,9.893Z" transform="translate(-0.128)" fill="#fff" />
                <Path id="Path_228" data-name="Path 228" d="M1,6.236v9.253a2.364,2.364,0,0,0,2.36,2.36H15.945a2.364,2.364,0,0,0,2.36-2.36V6.236l-7.727,5.62a1.573,1.573,0,0,1-1.85,0Z" transform="translate(0 -0.691)" fill="#fff" />
            </G>
        </Svg>
    )
}

export default BizeUlasinSvg