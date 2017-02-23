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
    NavigationActions.billsActive({status: 'active'})
  }

  handleBills = () => {
    this.toggleDrawer()
    NavigationActions.bills()
  }

  handleClosestToBecomingLaw = () => {
    this.toggleDrawer()
    NavigationActions.billsSortByClosestToBecomingLaw()
  }

  handleDateIntroduced = () => {
    this.toggleDrawer()
    NavigationActions.billsSortByDateIntroduced()
  }

  handleEastAsia = () => {
    this.toggleDrawer()
    NavigationActions.billsEastAsia()
  }

  handleEducation = () => {
    this.toggleDrawer()
    NavigationActions.billsEducation()
  }

  handleEnactedBills = () => {
    this.toggleDrawer()
    NavigationActions.billsEnacted({status: 'enacted'})
  }

  handleEnergy = () => {
    this.toggleDrawer()
    NavigationActions.billsEnergy()
  }

  handleEnvironment = () => {
    this.toggleDrawer()
    NavigationActions.billsEnvironment()
  }

  handleFailedBills = () => {
    this.toggleDrawer()
    NavigationActions.billsFailed({status: 'failed'})
  }

  handleHealthCare = () => {
    this.toggleDrawer()
    NavigationActions.billsHealthCare()
  }

  handleMilitary = () => {
    this.toggleDrawer()
    NavigationActions.billsMilitary()
  }

  handleTabledBills = () => {
    this.toggleDrawer()
    NavigationActions.billsTabled({status: 'tabled'})
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Main:</Text>
        <DrawerButton
          text='See All Bills' onPress={this.handleBills}
        />
        <Text style={styles.sectionTitle}>Sort By:</Text>
        <DrawerButton
          text='Closest to Becoming Law' onPress={this.handleClosestToBecomingLaw}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Date Introduced (Most Recent First)' onPress={this.handleDateIntroduced}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Status: Active' onPress={this.handleActiveBills}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Status: Enacted' onPress={this.handleEnactedBills}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Status: Failed' onPress={this.handleFailedBills}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Status: Tabled' onPress={this.handleTabledBills}
        />
        <Text style={styles.sectionTitle}>Filter By Issue:</Text>
        <DrawerButton
          text='China/Japan/East Asia' onPress={this.handleEastAsia}
        />
        <DrawerButton
          text='Education' onPress={this.handleEducation}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Energy' onPress={this.handleEnergy}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Environment' onPress={this.handleEnvironment}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Health Care' onPress={this.handleHealthCare}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Military/Defense' onPress={this.handleMilitary}
        />
        <Separator backgroundColor={'#000'} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
