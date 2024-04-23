import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const HaritaSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.25 18.595">
            <G id="map-svgrepo-com" transform="translate(-2.375 -2.702)">
                <Path id="Path_175" data-name="Path 175" d="M3,8.709c0-1.474,0-2.21.393-2.64a1.5,1.5,0,0,1,.5-.359c.532-.237,1.231,0,2.629.462a6.492,6.492,0,0,0,2.14.515,3,3,0,0,0,.588-.079,6.492,6.492,0,0,0,1.929-1.06l1.382-.922a6.463,6.463,0,0,1,2.487-1.291,6.462,6.462,0,0,1,2.739.591l1.165.388c.99.33,1.485.5,1.768.888S21,6.119,21,7.162v8.128c0,1.474,0,2.21-.393,2.64a1.5,1.5,0,0,1-.5.359c-.532.237-1.231,0-2.629-.462a6.494,6.494,0,0,0-2.14-.515,3,3,0,0,0-.588.079,6.491,6.491,0,0,0-1.929,1.06l-1.382.921a6.461,6.461,0,0,1-2.487,1.291,6.461,6.461,0,0,1-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888S3,17.881,3,16.838Z" fill="none" stroke={fill} stroke-width="1.25" />
                <Path id="Path_176" data-name="Path 176" d="M9,6.639V20.5" fill="none" stroke={fill} stroke-width="1.25" />
                <Path id="Path_177" data-name="Path 177" d="M15,3V17" fill="none" stroke={fill} stroke-width="1.25" />
            </G>
        </Svg>
    )
}

export default HaritaSvg