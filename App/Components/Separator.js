import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles/SeparatorStyles'

const Separator = ({backgroundColor}) => {
  return (
    <View style={styles.separator} backgroundColor={backgroundColor} />
  )
}

export default Separator

Separator.propTypes = {
  backgroundColor: React.PropTypes.string.isRequired
}
