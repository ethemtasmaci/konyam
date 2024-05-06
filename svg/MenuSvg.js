import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26.8}
      height={20}
      viewBox="0 0 26.8 20"
      {...props}
    >
      <Path
        d="M15.2 24h13.6M5 15.5h23.8M15.2 7h13.6"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        transform="rotate(180 15.15 12.75)"
        data-name="Menu / Menu_Alt_02"
      />
    </Svg>
  )
}

export default MenuSvg
