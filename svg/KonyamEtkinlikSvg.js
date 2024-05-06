import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const KonyamEtkinlikSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.26 42.26">
            <G id="Group_168" data-name="Group 168" transform="translate(0 0.36)">
                <Path id="Path_111" data-name="Path 111" d="M59.92,13.09A21.138,21.138,0,0,0,41,43.629a3.485,3.485,0,0,1,.285,2.428l-1.263,4.7a2.745,2.745,0,0,0,3.362,3.362l4.7-1.263a3.491,3.491,0,0,1,2.428.285A21.132,21.132,0,1,0,59.92,13.09Z" transform="translate(-38.79 -13.45)" fill="#8cb75e" />
                <G id="calendar-svgrepo-com_3_" data-name="calendar-svgrepo-com (3)" transform="translate(11 10.89)">
                    <Path id="Path_125" data-name="Path 125" d="M6.649,2.354a.6.6,0,1,0-1.209,0V3.627a3.68,3.68,0,0,0-2.481.88,3.68,3.68,0,0,0-.88,2.481h15.99a3.68,3.68,0,0,0-.88-2.481,3.68,3.68,0,0,0-2.481-.88V2.354a.6.6,0,1,0-1.209,0V3.574c-.536-.01-1.137-.01-1.813-.01H8.462c-.676,0-1.277,0-1.813.01Z" transform="translate(-0.015)" fill="#fff" />
                    <Path id="Path_126" data-name="Path 126" d="M2,11.563c0-.676,0-1.277.01-1.813h16.1c.01.536.01,1.137.01,1.813v1.612c0,3.039,0,4.559-.944,5.5s-2.464.944-5.5.944H8.447c-3.039,0-4.559,0-5.5-.944S2,16.214,2,13.175Zm12.088,1.612a.806.806,0,1,0-.806-.806A.806.806,0,0,0,14.088,13.175Zm0,3.224a.806.806,0,1,0-.806-.806A.806.806,0,0,0,14.088,16.4Zm-3.224-4.029a.806.806,0,1,1-.806-.806A.806.806,0,0,1,10.865,12.369Zm0,3.224a.806.806,0,1,1-.806-.806A.806.806,0,0,1,10.865,15.593ZM6.029,13.175a.806.806,0,1,0-.806-.806A.806.806,0,0,0,6.029,13.175Zm0,3.224a.806.806,0,1,0-.806-.806A.806.806,0,0,0,6.029,16.4Z" transform="translate(0 -1.553)" fill="#fff" fill-rule="evenodd" />
                </G>
            </G>
        </Svg>
    )
}

export default KonyamEtkinlikSvg