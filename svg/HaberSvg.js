import { View, Text } from 'react-native'
import Svg, { Path, Rect, G, Defs, ClipPath, Circle } from 'react-native-svg';
import React from 'react'

const HaberSvg = ({ style, width, height, fill }) => {
    return (
        <Svg style={style} width={width} height={height} fill={fill} id="ic_fluent_news_28_regular" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.656 24.714">
            <Path id="_-Color" data-name="🎨-Color" d="M27.64,28.714H6.016a4.016,4.016,0,0,1-4.01-3.788L2,24.7V6.78A2.78,2.78,0,0,1,4.59,4.006L4.78,4H23.933a2.78,2.78,0,0,1,2.774,2.59l.006.19v.927h2.162A2.78,2.78,0,0,1,31.65,10.3l.006.19V24.7a4.016,4.016,0,0,1-3.788,4.01l-.228.006h0ZM6.016,26.86H27.64A2.163,2.163,0,0,0,29.8,24.875L29.8,24.7V10.487a.927.927,0,0,0-.8-.918l-.126-.008H26.714V22.844a.927.927,0,0,1-.8.918l-.126.008a.927.927,0,0,1-.918-.8l-.008-.126V6.78a.927.927,0,0,0-.8-.918l-.126-.008H4.78a.927.927,0,0,0-.918.8l-.008.126V24.7a2.163,2.163,0,0,0,1.985,2.155l.177.007h0ZM12.19,15.125a1.545,1.545,0,0,1,1.545,1.545v4.321a1.545,1.545,0,0,1-1.545,1.545H7.869a1.545,1.545,0,0,1-1.545-1.545V16.67a1.545,1.545,0,0,1,1.545-1.545Zm4.947,5.556h4.32a.927.927,0,0,1,.126,1.845l-.126.008h-4.32a.927.927,0,0,1-.126-1.845l.126-.008h0Zm-5.256-3.7h-3.7v3.7h3.7Zm5.256-1.854h4.32a.927.927,0,0,1,.126,1.845l-.126.009h-4.32a.927.927,0,0,1-.126-1.845l.126-.008h0ZM7.247,9.556h14.21a.927.927,0,0,1,.126,1.845l-.126.008H7.247a.927.927,0,0,1-.126-1.845l.126-.008h0Z" transform="translate(-2 -4)" fill="#b9b9b9" />
        </Svg>
    )
}

export default HaberSvg