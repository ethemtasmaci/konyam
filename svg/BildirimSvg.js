import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const BildirimSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.263 29.66">
            <G id="Group_8" data-name="Group 8" transform="translate(-389.76 -23)">
                <Path id="bell-svgrepo-com_2_" data-name="bell-svgrepo-com (2)" d="M10.854,21.617H6.339a9.924,9.924,0,0,1-2.686-.13.531.531,0,0,1-.268-.477A13.116,13.116,0,0,1,4.9,18.275a14.718,14.718,0,0,0,1.958-7.828A7.2,7.2,0,0,1,9.2,5.181a8.387,8.387,0,0,1,11.283,0,7.2,7.2,0,0,1,2.337,5.266,14.718,14.718,0,0,0,1.958,7.828A13.125,13.125,0,0,1,26.3,21.01a.531.531,0,0,1-.268.477,9.924,9.924,0,0,1-2.686.13H18.831m-7.976,0,0,1.33a3.989,3.989,0,1,0,7.979,0v-1.33m-7.976,0h7.976" transform="translate(387.372 24.724)" fill="none" stroke="#8cb75e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                <G id="Ellipse_2" data-name="Ellipse 2" transform="translate(405.023 23)" fill="#f83c15" stroke="#fff" stroke-width="1">
                    <Circle cx="5.5" cy="5.5" r="5.5" stroke="none" />
                    <Circle cx="5.5" cy="5.5" r="5" fill="none" />
                </G>
            </G>
        </Svg>
    )
}

export default BildirimSvg