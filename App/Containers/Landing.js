// @flow

import React from 'react'
import { Text, View, Button, Image } from 'react-native'
import styles from './Styles/LandingStyle'
import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Landing extends React.Component {

  test() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
        We The People
        </Text>
        <View style={styles.bottomSection}>
          <Image
            source={Images.congressBackground}
            style={styles.bottomImage}
          />
        </View>
        <Button
          title="I am a button."
          onPress={this.test}
        />
      </View>
    )
  }
}
