import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handleActiveBills = () => {
    this.toggleDrawer()
    NavigationActions.billsActive()
  }

  handleBills = () => {
    this.toggleDrawer()
    NavigationActions.bills()
  }

  handleDateIntroduced = () => {
    this.toggleDrawer()
    NavigationActions.billsSortByDateIntroduced()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Main:</Text>
        <DrawerButton
          text='See All Bills' onPress={this.handleBills}
        />
        <View style={styles.separator} />
        <DrawerButton
          text='See Only Active Bills' onPress={this.handleActiveBills}
        />
      <View style={styles.separator} />
        <DrawerButton
          text='Sort Bills by Date Introduced' onPress={this.handleDateIntroduced}
        />
      <View style={styles.separator} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
