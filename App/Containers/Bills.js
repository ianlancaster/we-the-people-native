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
      sortByDateIntroduced: this.props.sortByDateIntroduced || false
    }
  }

  componentWillMount () {
    fetch('http://localhost:3000/api/bills/1', {
    }).then(res => res.json())
      .then(bills => {
        this.mapBills(bills)
      }).catch(err => { throw new Error(err) })
  }

  mapBills (bills) {
    if (this.state.showOnlyActive) {
      bills = bills.filter((bill) => {
        return bill.status === 'active'
      })
    }
    if (this.state.sortByDateIntroduced) {
      bills = bills.sort((a, b) => {
        return Date.parse(a.introduced_on) - Date.parse(b.introduced_on)
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
  }
}

Bills.propTypes = {
  showOnlyActive: React.PropTypes.bool,
  sortByDateIntroduced: React.PropTypes.bool
}
