import React from 'react'
import { Text, View, ScrollView, Button, Image } from 'react-native'
import styles from './Styles/LandingStyle'
import { Images } from '../Themes'
import BillStatus from '../Components/BillStatus'

export default class Landing extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topSection} />
        <View style={styles.bottomSection} />
        <Image
          source={Images.congressBackground}
          style={styles.bottomImage}
        />

      </View>
    )
  }
}
