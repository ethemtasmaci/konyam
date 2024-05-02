import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Tspan, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const SikcaSorulanSorularSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <G id="Group_149" data-name="Group 149" transform="translate(0 0.091)">
                <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.181)" fill="#8cb75e" />
                <Path id="question-solid" d="M18.66,37.642a2.746,2.746,0,0,1,2.66-2.821h1.33a2.746,2.746,0,0,1,2.66,2.821V37.8a2.86,2.86,0,0,1-1.222,2.371l-1.754,1.195a3.941,3.941,0,0,0-1.679,3.262v.066a1.332,1.332,0,1,0,2.66,0v-.062a1.08,1.08,0,0,1,.457-.89l1.754-1.195A5.741,5.741,0,0,0,27.968,37.8v-.159A5.487,5.487,0,0,0,22.649,32h-1.33A5.487,5.487,0,0,0,16,37.642a1.332,1.332,0,1,0,2.66,0Zm3.324,14.105a1.766,1.766,0,1,0-1.662-1.763A1.715,1.715,0,0,0,21.984,51.747Z" transform="translate(-0.854 -20.835)" fill="#fff" />
            </G>
        </Svg>

    )
}

export default SikcaSorulanSorularSvg