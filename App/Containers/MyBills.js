import React from 'react'
import { Text, View, AsyncStorage, Button } from 'react-native'
import styles from './Styles/MyBillsStyle'
import prettifyDate from '../Helpers/DatePrettifier'
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

  deleteAllBills = () => {
    AsyncStorage.setItem('bills', JSON.stringify([]))
    this.setState({bills: []})
    this.billsComponent = null
    this.billsOnPage = false
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

  showDetailedBill = (id, billTitle, dateIntroduced, lastAction, chamber, sponsor, status, progress, detailedStatus, urls) => {
    NavigationActions.billDetail({
      id,
      billTitle,
      dateIntroduced,
      lastAction,
      chamber,
      sponsor,
      status,
      progress,
      detailedStatus,
      urls
    })
  }

  mapBills = (bills) => {
    this.billsComponent = bills.map((bill) => {
      return (
        <View key={bill.id}>
          <Text>Title: {bill.title}</Text>
          <Text>Date Introduced: {prettifyDate(bill.dateIntroduced)}</Text>
          <Text>Status: {bill.progress.text}</Text>
          <Button
            title='Detailed view...'
            onPress={() => {
              this.showDetailedBill(
                bill.id,
                bill.title,
                bill.dateIntroduced,
                bill.lastAction,
                bill.chamber,
                bill.sponsor,
                bill.status,
                bill.progress,
                bill.detailedStatus,
                bill.urls
              )
            }}
          />
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
          <Button
            title='Delete All of My Bills'
            onPress={this.deleteAllBills}
          />
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
