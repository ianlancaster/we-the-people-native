import React from 'react'
import { Text, View, Button, Image, TouchableHighlight } from 'react-native'
import styles from './Styles/FooterStyle'
import { Images } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Footer extends React.Component {

  goToBillsPage () {
    NavigationActions.bills()
  }

  goToMyBills () {
    NavigationActions.myBills()
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.goToBillsPage}
        >
          <View style={styles.navItem}>
            <Image
              source={Images.billScroll}
            />
            <Text
              style={styles.text}
            >
            Bills
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.goToBillsPage}
        >
          <View style={styles.navItem}>
            <Image
              source={Images.congress}
              style={styles.icon}
            />
            <Text
              style={styles.text}
            >
            Congress
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.goToBillsPage}
        >
          <View style={styles.navItem}>
            <Image
              source={Images.bell}
              style={styles.icon}
            />
            <Text
              style={styles.text}
            >
            Notifications
            </Text>

          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.touchableHighlight}
          onPress={this.goToMyBills}
        >
          <View style={styles.navItem}>
            <Image
              source={Images.me}
              style={styles.icon}
            />
            <Text
              style={styles.text}
            >
            My Bills
            </Text>

          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
