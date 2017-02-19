import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/BillCardInListStyle'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// maybe make into a dumb component
export default class BillCardInList extends React.Component {

  render () {
    const { showDetailedBill } = this.props
    const bill = {
      id: this.props.bill_id,
      title: this.props.official_title,
      dateIntroduced: this.props.introduced_on,
      lastAction: this.props.last_action_at,
      chamber: this.props.chamber
    }
    const truncTitle = `${bill.title.split(' ').slice(0, 10).join(' ')}...`

    return (
      <View style={styles.container}>
        <Text style={styles.billId}>
          {bill.id}
        </Text>
        <Text>
        Title: {truncTitle}
        </Text>
        <Text>
        Introduced on: {bill.dateIntroduced}
        </Text>
        <Text>
        Last Action: {bill.lastAction}
        </Text>
        <Text>
        Chamber: {bill.chamber}
        </Text>
        <Button
          title='View Bill Details'
          onPress={() => {
            this.props.onChange(
            bill.id,
            bill.title,
            bill.dateIntroduced,
            bill.lastAction,
            bill.chamber)
          }}
        />
      </View>
    )
  }
}

BillCardInList.propTypes = {
  bill_id: React.PropTypes.string,
  official_title: React.PropTypes.string,
  introduced_on: React.PropTypes.string,
  last_action_at: React.PropTypes.string,
  chamber: React.PropTypes.string
}
