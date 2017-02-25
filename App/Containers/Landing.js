import React from 'react'
import { Text, View, ScrollView, Button, Image, TouchableOpacity, WebView } from 'react-native'
// import { Video } from 'react-native-video'
import styles from './Styles/LandingStyle'
import { Images } from '../Themes'
import BillStatus from '../Components/BillStatus'
import { Actions as NavigationActions } from 'react-native-router-flux'

export default class Landing extends React.Component {

  goToBills = () => {
    NavigationActions.bills()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <WebView
            source={{uri: 'https://www.youtube.com/embed/5tu32CCA_Ig'}}
            style={styles.videoEmbed}
          />
        </View>
        <Image
          source={Images.landingPageBackground}
          style={styles.bottomImage}
        >
          <Text
            style={styles.text}
          >
            Welcome to We The People! Help keep Congress accountable to the people it serves. View current bills and new laws, and then take action!</Text>
          <TouchableOpacity
            onPress={this.goToBills}
          >
            <Text
              style={styles.goToBillsButton}
            >
              Go to Bills!
            </Text>
          </TouchableOpacity>
        </Image>
      </View>
    )
  }
}
