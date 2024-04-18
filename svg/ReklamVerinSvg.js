import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const ReklamVerinSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_148" data-name="Group 148" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <Path id="Path_96" data-name="Path 96" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.09)" fill="#8cb75e" />
            <G id="announcement-svgrepo-com" transform="translate(-6.885 -6.911)">
                <Path id="Path_229" data-name="Path 229" d="M35.228,65.653l-.427-.347a1.536,1.536,0,0,1-.481-1.336v-.962a.526.526,0,0,0-.508-.508h-2a.526.526,0,0,0-.508.508v2.565a1.436,1.436,0,0,0,1.363,1.6h1.657c.962,0,1.042-.668,1.042-.668h0S35.521,65.92,35.228,65.653Z" transform="translate(-8.281 -31.123)" fill="#fff" />
                <Path id="Path_230" data-name="Path 230" d="M34.428,25.392V20.824a.886.886,0,0,0-1.55-.508l-2.992,2.805a2.563,2.563,0,0,1-1.683.561H23.126A3.229,3.229,0,0,0,20,26.942V27a3.03,3.03,0,0,0,3.126,3.046h5.1a2.684,2.684,0,0,1,1.71.668l2.939,2.859c.534.534,1.55.321,1.55-.454V28.572a1.59,1.59,0,1,0,0-3.179Z" transform="translate(0)" fill="#fff" />
            </G>
        </Svg>
    )
}

export default ReklamVerinSvg