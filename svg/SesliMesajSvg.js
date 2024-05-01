import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const SesliMesajSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_289" data-name="Group 289" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 58">
            <Rect id="Rectangle_456" data-name="Rectangle 456" width="60" height="58" rx="6" fill="#aad879" />
            <G id="Group_288" data-name="Group 288" transform="translate(14 13)">
                <G id="microphone-svgrepo-com_1_" data-name="microphone-svgrepo-com (1)">
                    <Circle id="Ellipse_29" data-name="Ellipse 29" cx="15.671" cy="15.671" r="15.671" fill="#fff" />
                    <Path id="Path_180" data-name="Path 180" d="M11.256,2A5.006,5.006,0,0,0,6.25,7.006V9.618a5.006,5.006,0,0,0,9.97.653H12.126a.653.653,0,1,1,0-1.306h4.135V7.659H12.126a.653.653,0,1,1,0-1.306H16.22A5.007,5.007,0,0,0,11.256,2Z" transform="translate(4.197 5.257)" fill="#aad879" />
                    <Path id="Path_181" data-name="Path 181" d="M3.9,9a.653.653,0,0,1,.653.653v.871a6.312,6.312,0,1,0,12.624,0V9.653a.653.653,0,1,1,1.306,0v.871a7.618,7.618,0,0,1-6.965,7.59V20.1a.653.653,0,1,1-1.306,0V18.114a7.618,7.618,0,0,1-6.965-7.59V9.653A.653.653,0,0,1,3.9,9Z" transform="translate(4.585 4.352)" fill="#aad879" fill-rule="evenodd" />
                </G>
            </G>
        </Svg>
    )
}

export default SesliMesajSvg