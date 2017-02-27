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

  handleAgriculture = () => {
    this.toggleDrawer()
    NavigationActions.billsAgriculture()
  }

  handleBills = () => {
    this.toggleDrawer()
    NavigationActions.bills({status: 'all'})
  }

  handleCentralAsia = () => {
    this.toggleDrawer()
    NavigationActions.billsCentralAsia()
  }

  handleClosestToBecomingLaw = () => {
    this.toggleDrawer()
    NavigationActions.billsSortByClosestToBecomingLaw()
  }

  handleCrime = () => {
    this.toggleDrawer()
    NavigationActions.billsCrime()
  }

  handleDateIntroduced = () => {
    this.toggleDrawer()
    NavigationActions.billsSortByDateIntroduced()
  }

  handleEastAsia = () => {
    this.toggleDrawer()
    NavigationActions.billsEastAsia()
  }

  handleEconomy = () => {
    this.toggleDrawer()
    NavigationActions.billsEconomy()
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

  handleMiddleEast = () => {
    this.toggleDrawer()
    NavigationActions.billsMiddleEast()
  }

  handleMyBills = () => {
    this.toggleDrawer()
    NavigationActions.myBills()
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
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='My Bills'
          onPress={this.handleMyBills}
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
          text='Agriculture' onPress={this.handleAgriculture}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='China/Japan/East Asia' onPress={this.handleEastAsia}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Crime' onPress={this.handleCrime}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Economy and Taxes' onPress={this.handleEconomy}
        />
        <Separator backgroundColor={'#000'} />
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
          text='Middle East' onPress={this.handleMiddleEast}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Military/Defense' onPress={this.handleMilitary}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='Russia/Central Asia/South Asia' onPress={this.handleCentralAsia}
        />

      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
