// @flow

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
  test() {
  }

  render() {
    console.log('props', this.props)
    return (
      <View style={styles.container}>
        <Text>
        Title: {this.props.official_title}
        </Text>
        <Button
          title="I am a button."
          onPress={this.test}
        />
      </View>
    )
  }
}
