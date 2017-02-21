import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import Separator from '../Components/Separator'
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

  handleClosestToBecomingLaw = () => {
    this.toggleDrawer()
    // need to fill this out
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
        <Separator backgroundColor={'blue'} />
        <DrawerButton
          text='See Only Active Bills' onPress={this.handleActiveBills}
        />
        <Text style={styles.sectionTitle}>Sort By:</Text>
        <DrawerButton
          text='Closest to Becoming Law' onPress={this.handleClosestToBecomingLaw}
        />
        <View style={styles.separator} />
        <DrawerButton
          text='Date Introduced' onPress={this.handleDateIntroduced}
        />
        <Text style={styles.sectionTitle}>Filter By Issue:</Text>
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
