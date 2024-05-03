import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function BildirimSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={26.263}
      height={29.66}
      viewBox="0 0 26.263 29.66"
      {...props}
    >
      <G data-name="Group 8">
        <Path
          data-name="bell-svgrepo-com (2)"
          d="M398.226 46.341h-4.515a9.924 9.924 0 01-2.686-.13.531.531 0 01-.268-.477 13.116 13.116 0 011.515-2.735 14.718 14.718 0 001.958-7.828 7.2 7.2 0 012.342-5.266 8.387 8.387 0 0111.283 0 7.2 7.2 0 012.337 5.266 14.718 14.718 0 001.958 7.828 13.125 13.125 0 011.522 2.735.531.531 0 01-.268.477 9.924 9.924 0 01-2.686.13h-4.515m-7.976 0v1.33a3.99 3.99 0 107.979 0v-1.33m-7.976 0h7.976"
          fill="none"
          stroke="#8cb75e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          transform="translate(-389.76 -23)"
        />
        <G
          data-name="Ellipse 2"
          transform="translate(-389.76 -23) translate(405.023 23)"
          fill="#f83c15"
          stroke="#fff"
          strokeWidth={1}
        >
          <Circle cx={5.5} cy={5.5} r={5.5} stroke="none" />
          <Circle cx={5.5} cy={5.5} r={5} fill="none" />
        </G>
      </G>
    </Svg>
  )
}

export default BildirimSvg
