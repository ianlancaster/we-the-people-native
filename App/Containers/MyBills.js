import React from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import styles from './Styles/MyBillsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class MyBills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bills: [],
      billsComponent: null,
      billsOnPage: false
    }
  }

  componentDidMount () {
    this.getBills()
  }

  getBills = () => {
    AsyncStorage.getItem('bills')
      .then((result) => { this.setBillState(result) })
      .then(() => { this.mapBills(this.state.bills) })
      .then(() => { this.setState({ billsOnPage: true }) })
      .catch(() => {
        throw new Error('There was a problem retrieving your stored bills.')
      })
  }

  mapBills = (bills) => {
    this.billsComponent = bills.map((bill) => {
      return (
        <View>
          <Text>{bill.title}</Text>
        </View>)
    })
  }

  setBillState = (result) => {
    const parsedBills = JSON.parse(result)
    this.setState({bills: parsedBills})
  }

  render () {
    if (this.state.billsOnPage) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>I am the My Bills component.</Text>
          {this.billsComponent || <Text>You have no stored bills. Try saving some bills!</Text>}
        </View>
      )
    } else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
  }
}
