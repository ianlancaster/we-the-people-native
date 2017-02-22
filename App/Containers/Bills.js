import React from 'react'
import { Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import styles from './Styles/BillsStyle'
import BillCardInList from './BillCardInList'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Bills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bills: null,
      showOnlyActive: this.props.showOnlyActive || false,
      sortByDateIntroduced: this.props.sortByDateIntroduced || false,
      showOnlyEnacted: this.props.showOnlyEnacted || false,
      showOnlyFailed: this.props.showOnlyFailed || false,
      showOnlyTabled: this.props.showOnlyTabled || false,
      sortByClosestToBecomingLaw: this.props.sortByClosestToBecomingLaw || false,
      status: this.props.status || ''
    }
  }

  componentWillMount () {
    this.makeAPICall()
  }

  makeAPICall () {
    fetch('http://localhost:3000/api/bills/1', {
    }).then(res => res.json())
    .then(bills => {
      this.mapBills(bills)
    }).catch(err => { throw new Error(err) })
  }

  mapBills (bills) {
    if (this.state.showOnlyActive || this.state.showOnlyEnacted || this.state.showOnlyTabled || this.state.showOnlyFailed) {
      bills = this.filterBillsByStatus(bills, this.state.status)
    }
    if (this.state.sortByDateIntroduced) {
      bills = bills.sort((a, b) => {
        return Date.parse(b.introduced_on) - Date.parse(a.introduced_on)
      })
    }
    if (this.state.sortByClosestToBecomingLaw) {
      bills = bills.sort((a, b) => {
        return b.progress.index - a.progress.index
      })
    }
    this.setState({ bills: bills.map((bill) => {
      return <BillCardInList
        {...bill}
        key={bill.bill_id}
        onChange={this.showDetailedBill}
        />
    })
    })
  }

  filterBillsByStatus (bills, status) {
    return bills.filter((bill) => {
      return bill.status === status
    })
  }

  showAllBills = () => {
    this.setState({ showOnlyActive: false })
  }

  showOnlyActiveBills = () => {
    this.setState({ showOnlyActive: true })
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

  render () {
    const { bills, showOnlyActive, sortByDateIntroduced } = this.state
    if (bills && bills.length) {
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
            {bills || <Text>Loading....</Text>}
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.failureMessage}>No bills match this search. Please try another search.</Text>
          <Button
            title='See All Bills'
            onPress={NavigationActions.bills}
          />
        </View>
      )
    }
  }
}

Bills.propTypes = {
  showOnlyActive: React.PropTypes.bool,
  sortByDateIntroduced: React.PropTypes.bool,
  showOnlyEnacted: React.PropTypes.bool,
  showOnlyFailed: React.PropTypes.bool,
  showOnlyTabled: React.PropTypes.bool,
  sortByClosestToBecomingLaw: React.PropTypes.bool,
  status: React.PropTypes.string
}
