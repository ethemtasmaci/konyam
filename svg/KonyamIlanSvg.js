import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const KonyamIlanSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_149" data-name="Group 149" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.09)" fill="#8cb75e" />
            <Path id="Path_121" data-name="Path 121" d="M8.793,2a6.793,6.793,0,1,0,4.165,12.159l4.574,4.574a.849.849,0,0,0,1.2-1.2l-4.574-4.574A6.793,6.793,0,0,0,8.793,2Z" transform="translate(12.009 11.009)" fill="#fff" fill-rule="evenodd" />
        </Svg>
    )
}

export default KonyamIlanSvg