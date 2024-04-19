import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const VideoSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_289" data-name="Group 289" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 58">
            <Rect id="Rectangle_456" data-name="Rectangle 456" width="60" height="58" rx="6" fill="#ec8787" />
            <G id="Group_293" data-name="Group 293" transform="translate(15 13.76)">
                <Circle id="Ellipse_31" data-name="Ellipse 31" cx="15.5" cy="15.5" r="15.5" transform="translate(0 0.24)" fill="#fff" />
                <G id="Page-1" transform="translate(10 8.24)">
                    <G id="Dribbble-Light-Preview">
                        <G id="icons">
                            <Path id="play-_1003_" data-name="play-[#1003]" d="M303.305,3611.754l-8.944-5.442A2.258,2.258,0,0,0,291,3608.4v10.883a2.258,2.258,0,0,0,3.361,2.083l8.944-5.442a2.483,2.483,0,0,0,0-4.165" transform="translate(-291 -3606.001)" fill="#ec8787" fill-rule="evenodd" />
                        </G>
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default VideoSvg