import React from 'react'
import { Text, View, ListView, ScrollView, TouchableOpacity, Button, TextInput } from 'react-native'
import styles from './Styles/BillsStyle'
import BillCardInList from './BillCardInList'
import sortByDateIntroduced from '../Helpers/SortByDateIntroduced'
import sortByClosestToBecomingLaw from '../Helpers/SortByClosestToBecomingLaw'
import filterBillsByTopic from '../Helpers/FilterBillsByTopic'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Bills extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      bills: null,
      rawBills: [],
      sortByDateIntroduced: this.props.sortByDateIntroduced || false,
      sortByClosestToBecomingLaw: this.props.sortByClosestToBecomingLaw || false,
      sortByTopic: this.props.sortByTopic || false,
      status: this.props.status || 'active',
      topics: this.props.topics || '',
      search: '',
      scroll: 0,
      showSearch: false
    }
  }

  componentWillMount () {
    this.makeAPICall()
  }

  makeAPICall () {
    fetch('http://localhost:3000/api/bills/', {
    }).then(res => res.json())
    .then(rawBills => this.setState({ rawBills }))
    .then(() => this.mapBills())
    .catch(err => { throw new Error(err) })
  }

  mapBills () {
    let bills = this.state.rawBills

    if (this.state.status !== 'all') {
      bills = this.filterBillsByStatus(bills, this.state.status)
    }

    if (this.state.sortByDateIntroduced) {
      bills = sortByDateIntroduced(bills)
    }

    if (this.state.sortByClosestToBecomingLaw) {
      bills = sortByClosestToBecomingLaw(bills)
    }

    if (this.state.sortByTopic) {
      bills = filterBillsByTopic(bills, this.state.topics)
    }

    bills = this.filterBillsBySearch(bills, this.state.search)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({ bills: ds.cloneWithRows(bills) })
  }

  handleSearch (search) {
    const promise = new Promise((resolve, reject) => {
      this.setState({ search })

      if (typeof this.state.search !== 'string') {
        reject(new Error('There was a problem. The search query is not a string'))
      }

      resolve(this.state.search)
    })

    promise.then(() => this.mapBills())
    promise.catch(err => { throw new Error(err) })
  }

  filterBillsBySearch = (bills, search) => {
    return bills.filter((bill) => {
      return bill.official_title.toLowerCase().includes(search.toLowerCase())
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

  handleScroll = (e) => {
    let currentScroll = e.nativeEvent.contentOffset.y
    if (currentScroll < 0) {
      this.setState({ showSearch: true })
    }
    if (currentScroll > this.state.scroll && currentScroll > 20) {
      this.setState({ showSearch: false })
    }
    this.setState({ scroll: e.nativeEvent.contentOffset.y })
  }

  renderBillsList () {
    const { bills, showOnlyActive, sortByDateIntroduced } = this.state
    return (
      <View style={styles.contentContainer}>
        <ListView
          enableEmptySections
          onScroll={this.handleScroll}
          scrollEventThrottle={200}
          dataSource={bills}
          renderRow={(bill) => (
            <BillCardInList
              {...bill}
              key={bill.bill_id}
              onChange={this.showDetailedBill}
            />
          )}
        />
      </View>
    )
  }

  renderNoBillsMessage () {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.failureMessage}>No bills match this search. Please try another search.</Text>
        <Button
          title='See All Bills'
          onPress={NavigationActions.bills}
        />
      </View>
    )
  }

  render () {
    const { bills, showSearch } = this.state

    return (
      <View style={styles.container}>
        {showSearch && (<View style={styles.verticalBlock} />)}
        <View style={styles.searchContainer}>
          <Text style={styles.searchText}>Search</Text>
          <TextInput
            style={styles.input}
            onChangeText={(search) => this.handleSearch(search)}
            clearButtonMode='always'
          />
        </View>
        {bills && bills._dataBlob.s1.length
          ? this.renderBillsList()
          : this.renderNoBillsMessage()
        }
      </View>
    )
  }
}

Bills.propTypes = {
  showOnlyActive: React.PropTypes.bool,
  sortByDateIntroduced: React.PropTypes.bool,
  showOnlyEnacted: React.PropTypes.bool,
  showOnlyFailed: React.PropTypes.bool,
  showOnlyTabled: React.PropTypes.bool,
  sortByClosestToBecomingLaw: React.PropTypes.bool,
  status: React.PropTypes.string,
  sortByTopic: React.PropTypes.bool,
  topics: React.PropTypes.array
}
