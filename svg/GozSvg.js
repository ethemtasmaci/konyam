import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const GozSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} fill={fill} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.506 13.5">
      <G id="eye-slash-svgrepo-com" transform="translate(-3.25 -5.25)">
        <Path id="Path_5" data-name="Path 5" d="M20.69,11.7c-.12-.26-2.86-6.45-8.69-6.45a7.671,7.671,0,0,0-1.66.18.75.75,0,0,0,.32,1.46A6.62,6.62,0,0,1,12,6.75c4.18,0,6.58,4.1,7.17,5.25a13.28,13.28,0,0,1-1.26,2,.748.748,0,1,0,1.18.92,13.423,13.423,0,0,0,1.6-2.59.78.78,0,0,0,0-.63Z" fill={fill} />
        <Path id="Path_6" data-name="Path 6" d="M6.53,5.47A.75.75,0,0,0,5.47,6.53l.92.92a13.16,13.16,0,0,0-3.08,4.26.76.76,0,0,0,0,.59c.12.26,2.86,6.45,8.69,6.45a7.93,7.93,0,0,0,4.39-1.3l1.08,1.08a.75.75,0,0,0,1.06-1.06Zm3.83,6,2.21,2.22a1.81,1.81,0,0,1-1.81-.4,1.74,1.74,0,0,1-.4-1.87ZM12,17.25c-4.19,0-6.58-4.11-7.17-5.25A12,12,0,0,1,7.45,8.51L9.24,10.3a3.24,3.24,0,0,0,4.46,4.46l1.61,1.61A6.5,6.5,0,0,1,12,17.25Z" fill={fill} />
      </G>
    </Svg>

  )
}

export default GozSvg