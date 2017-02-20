import React, { PropTypes } from 'react'
import Svg, {
    Circle,
    G,
    Line,
    Rect,
    Text
} from 'react-native-svg'

const white = '#ffffff'
const black = '#000000'
const green = '#B8E986'
let yellow = '#FFF1BF'
const red = '#FFD1D1'
const lightBlue = '#50739C'
const grey = '#D9D9D9'

const BillStatus = (status, progress, chamber) => {
  yellow = status === 'tabled' ? grey : yellow

  const chartText = chamber === 'house'
    ? { t1: 'HC', t2: 'HF', t3: 'SC', t4: 'SF' }
    : { t1: 'SC', t2: 'SF', t3: 'HC', t4: 'HF' }

  const chartColors = {
    PC: green,
    PF: green,
    SC: green,
    SF: green,
    C: green,
    H: green,
    S: green,
    P: green,
    lQ1: green,
    lQ2: green,
    lQ3: green,
    lQ4: green
  }

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
        stroke={chartColors.lQ2}
        strokeWidth='4'
      />
      <Line
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 + 15}
        stroke={chartColors.lQ3}
        strokeWidth='4'
      />
      <Line
        x1={(4 * ((325 - 20) / 6)) + 20}
        y1='30'
        x2={(5 * ((325 - 20) / 6)) + 20}
        y2={30 - 15}
        stroke={chartColors.lQ1}
        strokeWidth='4'
      />
      <Line
        x1={(5 * ((325 - 20) / 6)) + 20}
        y1={30 + 15}
        x2='325'
        y2='30'
        stroke={chartColors.lQ4}
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
      {TextBubble({ text: chartText.t1, color: chartColors.PC })}
      {TextBubble({ text: chartText.t2, xIndex: 1, color: chartColors.PF })}
      {TextBubble({ text: chartText.t3, xIndex: 2, color: chartColors.SC })}
      {TextBubble({ text: chartText.t4, xIndex: 3, color: chartColors.PF })}
      {TextBubble({ text: 'C', xIndex: 4, color: chartColors.C })}
      {TextBubble({ text: 'H', xIndex: 5, yOffset: 15, color: chartColors.H })}
      {TextBubble({ text: 'S', xIndex: 5, yOffset: -15, color: chartColors.S })}
      {TextBubble({ text: 'P', xIndex: 6, color: chartColors.P })}
    </Svg>
  )
}

BillStatus.propTypes = {
  exampleProp1: PropTypes.number,
  exampleProp2: PropTypes.number
}

const TextBubble = ({ text, xIndex, yOffset, color }) => {
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
          fill={color}
        />
      )}
      <Circle
        cx='5'
        r='10'
        fill={color}
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
