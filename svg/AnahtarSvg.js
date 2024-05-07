import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const AnahtarSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.462 22.192">
      <Path id="lock-2-svgrepo-com" d="M17.218,10.853V7.487a4.487,4.487,0,1,0-8.974,0v3.365m4.487,4.487v3.365m6.731-2.244a6.731,6.731,0,1,1-6.731-6.731A6.731,6.731,0,0,1,19.462,16.462ZM13.853,15.34a1.122,1.122,0,1,1-1.122-1.122A1.122,1.122,0,0,1,13.853,15.34Z" transform="translate(-5 -2)" fill="none" stroke={fill} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
    </Svg>
  )
}

export default AnahtarSvg