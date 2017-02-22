import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import styles from './Styles/BillsStyle'
import APIBills from '../Services/APIBills'
import FJSON from 'format-json'
import FullButton from '../Components/FullButton'
import BillCardInList from './BillCardInList'
import APIResult from './APIResult'
import { Actions as NavigationActions } from 'react-native-router-flux'

const endpoints = [
  { label: 'Get Bills', endpoint: 'getTheBills' },
  { label: 'pageOne', endpoint: 'getBills', args: [1] },
  { label: 'pageTwo', endpoint: 'getBills', args: [2] }
]

export default class Bills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bills: null,
      showOnlyActive: this.props.showOnlyActive || false,
      sortByDateIntroduced: this.props.sortByDateIntroduced || false
    }

    this.api = APIBills.create()
  }

  componentWillMount () {
    this.tryEndpoint()
  }

  showAllBills = () => {
    this.setState({ showOnlyActive: false })
  }

  showOnlyActiveBills = () => {
    this.setState({ showOnlyActive: true })
  }

  showDetailedBill = (id, billTitle, dateIntroduced, lastAction, chamber, sponsor, status, progress, detailedStatus) => {
    NavigationActions.billDetail({
      id,
      billTitle,
      dateIntroduced,
      lastAction,
      chamber,
      sponsor,
      status,
      progress,
      detailedStatus
    })
  }

  showResult (response, title) {
    let bills = response.data
    if (response.ok) {
      if (this.state.showOnlyActive) {
        bills = response.data.filter((bill) => {
          return bill.history.active === true
        })
      }
      if (this.state.sortByDateIntroduced) {
        bills = response.data.sort((a, b) => {
          return Date.parse(a.introduced_on) - Date.parse(b.introduced_on)
        })
      }
      this.setState({ bills })
      this.billData = this.state.bills.map((bill) => {
        return <BillCardInList
          {...bill}
          key={bill.bill_id}
          onChange={this.showDetailedBill}
          />
      })
    } else {
      throw new Error('There was a problem with the API call.')
    }
  }

  tryEndpoint () {
    const endpoint = endpoints[0].endpoint
    this.api[endpoint].apply(this)
      .then((result) => {
        this.showResult(result)
      })
      .then(() => this.showAllBills())
  }

  render () {
    const { showOnlyActive, sortByDateIntroduced, title, id, dateIntroduced, lastAction, chamber, sponsor, list } = this.state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} ref={() => 'container'}>
          {showOnlyActive ? <Text
            style={styles.text}
          >
            Active Bills:
          </Text> : <Text
            style={styles.text}
          >
            All Bills:
          </Text>}
          {showOnlyActive ? <TouchableOpacity
            onPress={this.showAllBills}
            >
            <Text style={styles.showHideBills}>Show All Bills</Text>
          </TouchableOpacity> : <TouchableOpacity
            onPress={this.showOnlyActiveBills}
            >
            <Text style={styles.showHideBills}>Show Only Active Bills</Text>
          </TouchableOpacity>}
          {this.billData ? this.billData : <Text>Loading....</Text>}
        </ScrollView>
      </View>
    )
  }
}

Bills.propTypes = {
  showOnlyActive: React.PropTypes.bool,
  sortByDateIntroduced: React.PropTypes.bool
}
