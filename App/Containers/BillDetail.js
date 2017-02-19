import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/BillDetailStyle'
import moment from 'moment'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class BillDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      title: this.props.title,
      dateIntroduced: this.props.dateIntroduced,
      lastAction: this.props.lastAction,
      chamber: this.props.chamber
    }
  }

  render () {
    const { id, title, dateIntroduced, lastAction, chamber } = this.state
    const prettifiedDateIntroduced = moment(dateIntroduced).format('MMM Do YYYY')
    const prettifiedLastAction = moment(lastAction).format('MMM Do YYYY')
    return (
      <View style={styles.container}>
        <Text>
          {id}
        </Text>
        <Text>
          {title}
        </Text>
        <Text>
          Proposed {prettifiedDateIntroduced}
        </Text>
        <Text>
          Last Action {prettifiedLastAction}
        </Text>
        <Text>
          Chamber {chamber}
        </Text>
      </View>
    )
  }
}

BillDetail.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  dateIntroduced: React.PropTypes.string,
  lastAction: React.PropTypes.string,
  chamber: React.PropTypes.string
}
