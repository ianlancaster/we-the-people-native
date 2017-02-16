// @flow

import React from 'react'
import { Text, View, Button, Image, TouchableHighlight } from 'react-native'
import styles from './Styles/FooterStyle'
import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Footer extends React.Component {

  goToBillsPage() {
    NavigationActions.bills()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.goToBillsPage}>
          <Image
            source={Images.billScroll}
          />
        </TouchableHighlight>
        <Image
          source={Images.congress}
        />
        <Image
          source={Images.bell}
        />
        <Image
          source={Images.me}
        />
      </View>
    )
  }
}
