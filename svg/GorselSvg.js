import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const GorselSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 58">
            <G id="Group_780" data-name="Group 780" transform="translate(-17 -440)">
                <G id="Group_289" data-name="Group 289" transform="translate(17 440)">
                    <Rect id="Rectangle_456" data-name="Rectangle 456" width="60" height="58" rx="6" fill="#68bed2" />
                </G>
                <G id="Group_292" data-name="Group 292" transform="translate(31.971 454)">
                    <Circle id="Ellipse_31" data-name="Ellipse 31" cx="15.5" cy="15.5" r="15.5" transform="translate(0.029)" fill="#fff" />
                    <G id="photo-svgrepo-com" transform="translate(7.874 7.301)">
                        <Path id="Path_182" data-name="Path 182" d="M14.327,0H.955A.955.955,0,0,0,0,.955V14.327a.955.955,0,0,0,.955.955H14.327a.955.955,0,0,0,.955-.955V.955A.955.955,0,0,0,14.327,0ZM1.91,1.91H13.372V9.716L11.2,7.54a.956.956,0,0,0-1.351,0L4.013,13.372H1.91Z" fill="#68bed2" />
                        <Circle id="Ellipse_30" data-name="Ellipse 30" cx="1.891" cy="1.891" r="1.891" transform="translate(3.783 3.933)" fill="#68bed2" />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default GorselSvg