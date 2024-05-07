import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Text,
  TSpan
} from "react-native-svg"

function EuroSvg(props) {
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
          <Stop offset={0} stopColor="#fe9c9c" />
          <Stop offset={1} stopColor="#d97070" />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 158"
        d="M17.893 0A17.893 17.893 0 110 17.893 17.893 17.893 0 0117.893 0z"
        fill="url(#a)"
      />
      <Text
        data-name="\u20AC"
        transform="translate(7.893 26.393)"
        fill="#fff"
        fontSize={25}
        fontFamily="Poppins-Medium, Poppins"
        fontWeight={500}
      >
        <TSpan x={0} y={0}>
          {"\u20AC"}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default EuroSvg
