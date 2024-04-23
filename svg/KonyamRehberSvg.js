import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const KonyamRehberSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="Group_149" data-name="Group 149" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.09)" fill="#8cb75e" />
            <G id="katman_1" data-name="katman 1" transform="translate(12.277 11.111)">
                <Path id="Path_120" data-name="Path 120" d="M8.853,20.038c-.929,0,.17-1.474-4.422-3.761a7.4,7.4,0,0,1-.733-.42A8.492,8.492,0,0,1,0,8.719,8.789,8.789,0,0,1,8.853,0a8.789,8.789,0,0,1,8.853,8.719,8.4,8.4,0,0,1-4.422,7.558C8.683,18.573,9.782,20.038,8.853,20.038Zm0-7.817a3.458,3.458,0,1,0,0-6.915,3.458,3.458,0,1,0,0,6.915Z" fill="#fff" />
            </G>
        </Svg>
    )
}

export default KonyamRehberSvg