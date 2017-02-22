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
      <Line
        x1='20'
        y1='30'
        x2={(4 * ((325 - 20) / 6)) + 20}
        y2='30'
        stroke={green}
        strokeWidth='4'
      />
      <Line
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 + 15}
        stroke={green}
        strokeWidth='4'
      />
      <Line
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 - 15}
        stroke={green}
        strokeWidth='4'
      />
      <Line
        x1={(5 * ((325 - 20) / 6)) + 20}
        y1={30 + 15}
        x2='325'
        y2='30'
        stroke={green}
        strokeWidth='4'
      />
      <Line
        x1={(5 * ((325 - 20) / 6)) + 20}
        y1={30 - 15}
        x2='325'
        y2='30'
        stroke={green}
        strokeWidth='4'
      />
      {TextBubble('HC')}
      {TextBubble('HF', 1)}
      {TextBubble('SC', 2)}
      {TextBubble('SF', 3)}
      {TextBubble('C', 4)}
      {TextBubble('H', 5, 15)}
      {TextBubble('S', 5, -15)}
      {TextBubble('P', 6)}
    </Svg>
  )
}

BillStatus.propTypes = {
  exampleProp1: PropTypes.number,
  exampleProp2: PropTypes.number
}

const TextBubble = (text, xIndex, yOffset, color) => {
  const x = (xIndex * ((325 - 20) / 6)) + 20
  const y = yOffset + 30
  return (
    <G
      x={x || '20'}
      y={y || '30'}
    >
      {text.length > 1 && (
        <Circle
          r='10'
          fill={green}
        />
      )}
      <Circle
        cx='5'
        r='10'
        fill={green}
      />
      <Text
        y='-8'
        x={text.length > 1 ? '2' : '5'}
        fill={lightBlue}
        fontSize='12'
        fontWeight='bold'
        textAnchor='middle'
      >{text}</Text>
    </G>
  )
}

module.exports = BillStatus
