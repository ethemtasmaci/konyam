import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';
import React from 'react'

const TarihSvg = ({ style, width, height }) => {
    return (
        <Svg style={style} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.692 17.466">
            <G id="Calendar_Calendar_Days" data-name="Calendar / Calendar_Days" transform="translate(-3.25 -1.25)">
                <Path id="Vector" d="M7.548,3.774H6.839a4.409,4.409,0,0,0-1.87.193,1.773,1.773,0,0,0-.775.775A4.409,4.409,0,0,0,4,6.612v.709M7.548,3.774h7.1m-7.1,0V2m7.1,1.774h.71a4.4,4.4,0,0,1,1.869.193A1.775,1.775,0,0,1,18,4.742a4.4,4.4,0,0,1,.193,1.867v.712M14.644,3.774V2M4,7.322v7.806A4.406,4.406,0,0,0,4.193,17a1.774,1.774,0,0,0,.775.775,4.4,4.4,0,0,0,1.867.193h8.52a4.4,4.4,0,0,0,1.866-.193A1.776,1.776,0,0,0,18,17a4.4,4.4,0,0,0,.193-1.866V7.322M4,7.322H18.192m-3.548,7.1h0v0h0Zm-3.548,0h0v0h0Zm-3.548,0h0v0h0Zm7.1-3.548v0h0v0Zm-3.55,0h0v0h0Zm-3.548,0h0v0h0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </G>
        </Svg>

    )
}

export default TarihSvg