import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const UyariSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.498 53.498">
      <Path id="info-square-svgrepo-com" d="M28.749,55.5c-12.61,0-18.914,0-22.832-3.917S2,41.359,2,28.749,2,9.835,5.917,5.917,16.139,2,28.749,2,47.664,2,51.581,5.917,55.5,16.139,55.5,28.749s0,18.915-3.917,22.832S41.359,55.5,28.749,55.5Zm0-11.368a2.006,2.006,0,0,0,2.006-2.006V26.074a2.006,2.006,0,1,0-4.012,0V42.124A2.006,2.006,0,0,0,28.749,44.13Zm0-28.755a2.675,2.675,0,1,1-2.675,2.675A2.675,2.675,0,0,1,28.749,15.375Z" transform="translate(-2 -2)" fill="#868686" fill-rule="evenodd" />
    </Svg>
  )
}

export default UyariSvg