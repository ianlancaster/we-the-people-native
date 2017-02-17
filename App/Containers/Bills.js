import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './Styles/BillsStyle'
import API from '../Services/Api'
import FJSON from 'format-json'
// import { Images } from '../Themes'
// import DrawerButton from '../Components/DrawerButton'
// import { Actions as NavigationActions } from 'react-native-router-flux'

const endpoints = [
  { label: 'pageOne', endpoint: 'getBills', args: [1] },
  { label: 'pageTwo', endpoint: 'getBills', args: [2] }
]

export default class Bills extends React.Component {
  constructor() {
    super()
    this.state = {

    }
    this.api = API.create()
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text
            style={styles.text}
          >
            I am the Bills component.
          </Text>
        </ScrollView>
      </View>
    )
  }
}
