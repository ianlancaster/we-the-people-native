import React, { PropTypes } from 'react'
import Svg, {
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg'

const white = '#ffffff'
const black = '#000000'
const green = '#B8E986'
const yellow = '#FFF1BF'
const red = '#FFD1D1'
const lightBlue = '#50739C'

const BillStatus = () => {
  return (
    <Svg
      height='60'
      width='350'
    >
      <Rect
        height='60'
        width='350'
        strokeWidth='3'
        fill={white}
        stroke={black}
      />
      {TextBubble()}
    </Svg>
  )
}

BillStatus.propTypes = {
  exampleProp1: PropTypes.number,
  exampleProp2: PropTypes.number
}

const TextBubble = () => {
  return (
    <G
      x='20'
      y='30'
    >
      <Circle
        r='10'
        fill={green}
      />
      <Circle
        cx='5'
        r='10'
        fill={green}
      />
      <Text
        y='-8'
        x='2'
        fill={lightBlue}
        fontSize='12'
        fontWeight='bold'
        textAnchor='middle'
      >HC</Text>
    </G>
  )
}

module.exports = BillStatus
