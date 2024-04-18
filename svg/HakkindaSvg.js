import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Tspan, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const HakkindaSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_149" data-name="Group 149" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.09)" fill="#8cb75e" />
            <Path id="info-circle-svgrepo-com_1_" data-name="info-circle-svgrepo-com (1)" d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12ZM12,17.75a.75.75,0,0,0,.75-.75V11a.75.75,0,0,0-1.5,0v6A.75.75,0,0,0,12,17.75ZM12,7a1,1,0,1,1-1,1A1,1,0,0,1,12,7Z" transform="translate(9.5 9.33)" fill="#fff" fill-rule="evenodd" />
        </Svg>
    )
}

export default HakkindaSvg