import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28.5}
      height={28.5}
      viewBox="0 0 28.5 28.5"
      {...props}
    >
      <G fill="none" stroke="#b9b9b9" strokeWidth={2}>
        <Path
          data-name="Path 20"
          d="M13.7 4.742A2.8 2.8 0 019.946 6.2 2.826 2.826 0 006.2 9.946 2.8 2.8 0 014.742 13.7a2.791 2.791 0 000 5.152A2.8 2.8 0 016.2 22.6a2.826 2.826 0 003.746 3.75 2.8 2.8 0 013.754 1.458 2.791 2.791 0 005.152 0A2.8 2.8 0 0122.6 26.35a2.826 2.826 0 003.75-3.75 2.8 2.8 0 011.458-3.752 2.791 2.791 0 000-5.152 2.8 2.8 0 01-1.458-3.75A2.826 2.826 0 0022.6 6.2a2.8 2.8 0 01-3.752-1.458 2.791 2.791 0 00-5.148 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(-2.025 -2.025)"
        />
        <Path
          data-name="Path 21"
          d="M20.704 16.275a4.429 4.429 0 11-4.429-4.429 4.429 4.429 0 014.429 4.429z"
          transform="translate(-2.025 -2.025)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
