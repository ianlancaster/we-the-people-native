import React from 'react'
import { Text, View, Button, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/BillCardInListStyle'
import prettifyDate from '../Helpers/DatePrettifier'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class BillCardInList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.bill_id,
      title: this.props.official_title,
      dateIntroduced: this.props.introduced_on,
      lastAction: this.props.last_action_at,
      chamber: this.props.chamber
    }
  }

  render () {
    const { showDetailedBill } = this.props
    const { id, title, dateIntroduced, lastAction, chamber } = this.state
    const truncTitle = `${title.split(' ').slice(0, 10).join(' ')}...`

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.onChange(
            id,
            title,
            dateIntroduced,
            lastAction,
            chamber)
          }}
          >
          <Text style={styles.title}>
            {truncTitle}
          </Text>
        </TouchableOpacity>
        <Text style={styles.id}>
          {id.toUpperCase()}
        </Text>
        <Text style={styles.dateIntroduced}>
          <Text style={styles.boldSpan}>
            Date Introduced:
          </Text>
          {prettifyDate(dateIntroduced)}
        </Text>
        <Text style={styles.lastAction}>
          <Text style={styles.boldSpan}>
            Last Action:
          </Text>
          {prettifyDate(lastAction)}
        </Text>
        <Text style={{textAlign: 'center', marginTop: 10, marginBottom: 10, fontStyle: 'italic'}}>(Bill Status Info Goes Here)</Text>
        <View style={styles.separator} />
        <View style={styles.lowerContainer}>
          <Image
            source={require('../Images/view-bill-details-icon.png')}
            style={styles.icon}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.onChange(
              id,
              title,
              dateIntroduced,
              lastAction,
              chamber)
            }}
          >
            <Text
              style={styles.viewBillDetails}
            >
              View Bill Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

BillCardInList.propTypes = {
  bill_id: React.PropTypes.string,
  official_title: React.PropTypes.string,
  introduced_on: React.PropTypes.string,
  last_action_at: React.PropTypes.string,
  chamber: React.PropTypes.string,
  onChange: React.PropTypes.func,
  showDetailedBill: React.PropTypes.func
}
