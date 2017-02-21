// @flow

import React from 'react'
import { Text, View, ScrollView, Button, Image } from 'react-native'
import styles from './Styles/LandingStyle'
import { Images } from '../Themes'
import BillStatus from '../Components/BillStatus'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Landing extends React.Component {

  test () {
  }

  render () {
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
          title='I am a button.'
          onPress={this.test}
        />
        <ScrollView>
          <BillStatus progress={{ index: 23 }} />
          <BillStatus progress={{ index: 22 }} />
          <BillStatus progress={{ index: 21 }} />
          <BillStatus progress={{ index: 20 }} />
          <BillStatus progress={{ index: 19 }} />
          <BillStatus progress={{ index: 18 }} />
          <BillStatus progress={{ index: 17 }} />
          <BillStatus progress={{ index: 16 }} />
          <BillStatus progress={{ index: 15 }} />
          <BillStatus progress={{ index: 14 }} />
          <BillStatus progress={{ index: 13 }} />
          <BillStatus progress={{ index: 12 }} />
          <BillStatus progress={{ index: 11 }} />
          <BillStatus progress={{ index: 10 }} />
          <BillStatus progress={{ index: 9 }} />
          <BillStatus progress={{ index: 8 }} />
          <BillStatus progress={{ index: 7 }} />
          <BillStatus progress={{ index: 6 }} />
          <BillStatus progress={{ index: 5 }} />
          <BillStatus progress={{ index: 4 }} />
          <BillStatus progress={{ index: 3 }} />
          <BillStatus progress={{ index: 2 }} />
          <BillStatus progress={{ index: 1 }} />
          <BillStatus progress={{ index: 0 }} />
        </ScrollView>
      </View>
    )
  }
}
