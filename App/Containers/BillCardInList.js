import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Styles/BillCardInListStyle'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class BillCardInList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
        Title: {this.props.official_title}
        </Text>
        <Text>
        Introduced on: {this.props.introduced_on}
        </Text>
        <Text>
        Last Action: {this.props.last_action_at}
        </Text>
        <Text>
        Chamber: {this.props.chamber}
        </Text>
      </View>
    )
  }
}

BillCardInList.propTypes = {
  official_title: React.PropTypes.string,
  introduced_on: React.PropTypes.string,
  last_action_at: React.PropTypes.string,
  chamber: React.PropTypes.string,
}
