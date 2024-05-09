import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg"

function BorsaSvg(props) {
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
          <Stop offset={0} stopColor="#6ecde2" />
          <Stop offset={1} stopColor="#5ea5b7" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 158"
        d="M17.893 0A17.893 17.893 0 110 17.893 17.893 17.893 0 0117.893 0z"
        fill="url(#a)"
      />
      <G data-name="Layer 1">
        <Path
          data-name="Path 159"
          d="M13.345.368a10.6 10.6 0 00-7.8 19.558 6.655 6.655 0 01-2.622-6.043 7.885 7.885 0 01.277-1.547c.383-1.088.3-1.269 2.9-4.681a11.19 11.19 0 002.481-5.388c.18.426 1.239 2.677 2.31 5.108a2.323 2.323 0 01.045 1.309c-.654 2.955-5.963 3.412-3.077 5.49 3.061 2.205 2.756 4.439.469 6.787a10.657 10.657 0 001.9.243c3.338-2.35 2.852-5.122-.21-7.327C7.135 11.8 12.4 11.591 13.05 8.636a2.35 2.35 0 00-.24-1.591c1.867-1.352 3.485-2.478 3.735-2.672a11.164 11.164 0 00-.553 5.931c.479 3.741.41 4.281.243 5.128a8.175 8.175 0 01-.625 1.86 6.655 6.655 0 01-5.287 3.913A10.6 10.6 0 0013.345.366zm.785 3.359l-2.1 1.585-1.046-2.428h.012l-.011-.006 2.1-1.586 1.047 2.429h-.013.012z"
          transform="translate(7.289 7.29) translate(.003 -.004)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default BorsaSvg