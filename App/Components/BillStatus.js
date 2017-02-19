import React, { PropTypes } from 'react'
import Svg, { Circle } from 'react-native-svg'

const BillStatus = () => {
  return (
    <Svg
      height='100'
      width='100'
    >
      <Circle
        cx='50'
        cy='50'
        r='45'
        stroke='blue'
        strokeWidth='2.5'
        fill='green'
      />
    </Svg>
  )
}

BillStatus.propTypes = {
  exampleProp1: PropTypes.number,
  exampleProp2: PropTypes.number
}

module.exports = BillStatus
