import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg"

function AltinSvg(props) {
  return (
    <Svg
      data-name="Group 230"
      xmlns="http://www.w3.org/2000/svg"
      width={35.785}
      height={35.785}
      viewBox="0 0 35.785 35.785"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffd79b" />
          <Stop offset={1} stopColor="#ffbc57" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 158"
        d="M17.893 0A17.893 17.893 0 110 17.893 17.893 17.893 0 0117.893 0z"
        fill="url(#a)"
      />
      <Path
        d="M9.189 16.042zm14.455-2.392l-1.678-4.438L15.869 5.9 3.235 12.633l-1.848 4.936 7.448 3.963v-5.04l-5.672-3.64.5.263-.283-.163 1.012.538-.921-.538 5.72 3.09L21.5 9.675l-1.972 1.082 2.308-1.179L17.272 12l-7.617 4.574-.82 4.957 14.808-7.882zm-14.209.842L6.1 12.712l3.336.239 9.842-3.644-9.843 5.185z"
        transform="translate(5.377 4.178)"
        fill="#fff"
      />
    </Svg>
  )
}

export default AltinSvg