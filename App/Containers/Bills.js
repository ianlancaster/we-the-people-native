import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import styles from './Styles/BillsStyle'
import API from '../Services/Api'
import FJSON from 'format-json'
import FullButton from '../Components/FullButton'
import BillCardInList from './BillCardInList'
import APIResult from './APIResult';
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

const endpoints = [
  { label: 'Get City (Boise)', endpoint: 'getCity', args: ['Boise'] },
  { label: 'pageOne', endpoint: 'getBills', args: [1] },
  { label: 'pageTwo', endpoint: 'getBills', args: [2] },
]

export default class Bills extends React.Component {
  constructor() {
    super()

    this.api = API.create()
  }

  showResult (response, title = 'Response') {
    // this.refs.container.scrollTo({x: 0, y: 0, animated: true})
    if (response.ok) {
      const billData = response.data.map((bill) => {
        return <BillCardInList {...bill} key={bill.bill_id}/>
        })

      this.refs.result.setState(
        {
          message: billData,
          title,
        }
      )
    } else {
      this.refs.result.setState(
        {
          message: `${response.problem} - ${response.status}`,
          title,
        }
      )
    }
  }

  tryEndpoint (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    this.api[endpoint].apply(this, args).then((result) => {
      this.showResult(result, label || `${endpoint}(${args.join(', ')})`)
    })
  }

  renderButton (apiEndpoint) {
    const { label, endpoint, args = [''] } = apiEndpoint
    return (
      <FullButton text={label || `${endpoint}(${args.join(', ')})`} onPress={this.tryEndpoint.bind(this, apiEndpoint)} styles={{marginTop: 10}} key={`${endpoint}-${args.join('-')}`} />
    )
  }

  renderButtons () {
    return endpoints.map((endpoint) => this.renderButton(endpoint))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} ref={() => 'container' }>
          <Text
            style={styles.text}
          >
            Bills:
          </Text>
          <APIResult ref='result' />
          {this.renderButtons()}
        </ScrollView>
      </View>
    )
  }
}
