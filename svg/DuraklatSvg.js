import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const DuraklatSvg = ({ style, width, height, fill }) => {
  return (
    <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.982 15.177">
      <G id="Group_743" data-name="Group 743" transform="translate(0.233 -0.315)">
        <Rect id="Rectangle_497" data-name="Rectangle 497" width="3.994" height="15.177" rx="1.997" transform="translate(-0.233 0.315)" fill={fill} />
        <Rect id="Rectangle_498" data-name="Rectangle 498" width="3.994" height="15.177" rx="1.997" transform="translate(7.755 0.315)" fill={fill} />
      </G>
    </Svg>
  )
}

export default DuraklatSvg