import React from 'react'
import { Text, View, ScrollView, Button, Image } from 'react-native'
import styles from './Styles/LandingStyle'
import { Images } from '../Themes'
import BillStatus from '../Components/BillStatus'

export default class Landing extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={Images.congressBackground}
            style={styles.topImage}
          />
        </View>
        <Image
          source={Images.landingPageBackground}
          style={styles.bottomImage}
        >
          <Text style={styles.text}>Welcome to We The People! Help keep Congress accountable to the people it serves. View current bills and new laws, and then take action!</Text>
        </Image>
      </View>
    )
  }
}
