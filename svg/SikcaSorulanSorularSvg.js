import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Tspan, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const SikcaSorulanSorularSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <G id="Group_780" data-name="Group 780" transform="translate(-20 -164.394)">
                <G id="Group_149" data-name="Group 149" transform="translate(20 164.485)">
                    <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.181)" fill="#8cb75e" />
                    <Svg height={30} width={30} fill={'#FFF'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><Path fill={'#fff'} d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" /></Svg>
                </G>
            </G>
        </Svg>
    )
}

export default SikcaSorulanSorularSvg