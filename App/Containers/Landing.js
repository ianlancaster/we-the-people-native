// @flow

import React from 'react'
import { Text, View, Button } from 'react-native'
// import styles from './Styles/BillsStyle'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Landing extends React.Component {

  test() {

  }

  render() {
    return (
      <View>
        <Text>
        I am the Landing component. I cannot be seen, apparently.
        </Text>
        <Button
          title="I am a button."
          onPress={this.test}
        />
      </View>
    )
  }
}
