import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/MyBillsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class MyBills extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I am the My Bills component.</Text>
      </View>
    )
  }
}
