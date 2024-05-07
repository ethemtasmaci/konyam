import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25.574}
      height={28.5}
      viewBox="0 0 25.574 28.5"
      {...props}
    >
      <G
        data-name="user-svgrepo-com (1)"
        fill="none"
        stroke="#b9b9b9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="Path 18"
          d="M18.751 6.35A6.35 6.35 0 1112.401 0a6.35 6.35 0 016.35 6.35z"
          transform="translate(.731 1)"
        />
        <Path
          data-name="Path 19"
          d="M12.056 16.261C5.546 16.261.269 20.845.269 26.5h23.574c0-5.655-5.274-10.239-11.787-10.239z"
          transform="translate(.731 1)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
