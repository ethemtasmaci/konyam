import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const DinleSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Page-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.199 8.397">
            <G id="Dribbble-Light-Preview">
                <G id="icons">
                    <Path id="play-_1003_" data-name="play-[#1003]" d="M297.594,3609.084l-4.792-2.916a1.21,1.21,0,0,0-1.8,1.116v5.832a1.21,1.21,0,0,0,1.8,1.116l4.792-2.916a1.33,1.33,0,0,0,0-2.231" transform="translate(-291 -3606.001)" fill="#fff" fill-rule="evenodd" />
                </G>
            </G>
        </Svg>
    )
}

export default DinleSvg