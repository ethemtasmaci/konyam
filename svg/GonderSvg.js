import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path
} from "react-native-svg"

function GonderSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={85}
      height={85}
      viewBox="0 0 85 85"
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
          <Stop offset={0} stopColor="#c1f18e" />
          <Stop offset={1} stopColor="#8cb75e" />
        </LinearGradient>
      </Defs>
      <G data-name="Group 780">
        <G
          data-name="Ellipse 3"
          transform="translate(-173 -796.575) translate(173 796.575)"
          stroke="#fff"
          strokeWidth={4}
          fill="url(#a)"
        >
          <Circle cx={42.5} cy={42.5} r={42.5} stroke="none" />
          <Circle cx={42.5} cy={42.5} r={40.5} fill="none" />
        </G>
        <G
          data-name="Group 625"
          transform="translate(-173 -796.575) translate(-1203.5 -212.646)"
          fill="none"
          stroke="#80a459"
          strokeLinecap="round"
          strokeWidth={2}
        >
          <Path
            data-name="send-alt-2-svgrepo-com (1)"
            d="M1438.418 1052.115h-25.822m-.227 1.181l-2.15 7.135c-.814 2.7-1.221 4.052-.875 4.858a2.411 2.411 0 001.656 1.394c.854.2 2.115-.427 4.639-1.688l18.857-9.434c2.221-1.111 3.332-1.666 3.689-2.418a2.412 2.412 0 000-2.067c-.356-.752-1.467-1.307-3.689-2.418l-18.883-9.436c-2.516-1.261-3.775-1.887-4.631-1.684a2.411 2.411 0 00-1.656 1.391c-.347.805.055 2.153.861 4.848l2.181 7.3a5.065 5.065 0 01.209.829 2.4 2.4 0 010 .561 5.06 5.06 0 01-.208.828z"
            strokeLinejoin="round"
          />
          <Path
            data-name="Line 15"
            transform="translate(1398.5 1045.5)"
            d="M0 0L6 0"
          />
          <Path
            data-name="Line 16"
            transform="translate(1400.5 1052.11)"
            d="M0 0L4 0"
          />
          <Path
            data-name="Line 17"
            transform="translate(1401.5 1058.72)"
            d="M0 0L3 0"
          />
        </G>
      </G>
    </Svg>
  )
}

export default GonderSvg
