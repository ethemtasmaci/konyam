import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const TikSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.673 10">
      <Path id="done-v-svgrepo-com_2_" data-name="done-v-svgrepo-com (2)" d="M17.42,6.253a.863.863,0,0,1,0,1.221L9.4,15.494a1.726,1.726,0,0,1-2.441,0L3.253,11.789a.863.863,0,1,1,1.221-1.221l3.705,3.705L16.2,6.253A.863.863,0,0,1,17.42,6.253Z" transform="translate(-3 -6)" fill="#c3c3c3" fill-rule="evenodd" />
    </Svg>
  )
}

export default TikSvg