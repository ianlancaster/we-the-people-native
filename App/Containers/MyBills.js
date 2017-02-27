import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import styles from './Styles/MyBillsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class MyBills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bills: []
    }
  }

  componentDidMount () {
    this.getBills()
  }

  getBills = () => {
    AsyncStorage.getItem('bills').then((result) => { this.mapBills(result) }).catch(() => { throw new Error('There was a problem retrieving your stored bills.') })
  }

  mapBills = (result) => {

  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I am the My Bills component.</Text>
      </View>
    )
  }
}
