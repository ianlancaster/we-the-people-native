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

  handleLGBT = () => {
    this.toggleDrawer()
    NavigationActions.billsLGBT()
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

  handleWomen = () => {
    this.toggleDrawer()
    NavigationActions.billsWomen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Main:</Text>
        <DrawerButton
          text='See All Bills' onPress={this.handleBills}
          source={require('../Images/bill-icon.png')}
        />
        <Separator backgroundColor={'#000'} />
        <DrawerButton
          text='My Bills'
          onPress={this.handleMyBills}
          source={require('../Images/eye-icon.png')}
        />

        <Text style={styles.sectionTitle}>Sort By:</Text>
        <DrawerButton
          text='Closest to Becoming Law' onPress={this.handleClosestToBecomingLaw}
          source={require('../Images/check-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Date Introduced' onPress={this.handleDateIntroduced}
          source={require('../Images/calendar-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Status: Active' onPress={this.handleActiveBills}
          source={require('../Images/flag-icon-2.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Status: Enacted' onPress={this.handleEnactedBills}
          source={require('../Images/enacted-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Status: Failed' onPress={this.handleFailedBills}
          source={require('../Images/failed-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Status: Tabled' onPress={this.handleTabledBills}
          source={require('../Images/tabled-icon.png')}
        />

        <Text style={styles.sectionTitle}>Filter By Issue:</Text>
        <DrawerButton
          text='Agriculture'
          onPress={this.handleAgriculture}
          source={require('../Images/agriculture-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='China/Japan/East Asia' onPress={this.handleEastAsia}
          source={require('../Images/china-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Crime'
          onPress={this.handleCrime}
          source={require('../Images/sheriff-icon.gif')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Economy and Taxes' onPress={this.handleEconomy}
          source={require('../Images/dollar-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Education' onPress={this.handleEducation}
          source={require('../Images/education-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Energy'
          onPress={this.handleEnergy}
          source={require('../Images/energy-icon-2.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Environment' onPress={this.handleEnvironment}
          source={require('../Images/enviro-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Health Care' onPress={this.handleHealthCare}
          source={require('../Images/health-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='LGBT Issues/Gay Rights' onPress={this.handleLGBT}
          source={require('../Images/lgbt-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Middle East' onPress={this.handleMiddleEast}
          source={require('../Images/mideast-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Military/Defense/Veterans' onPress={this.handleMilitary}
          source={require('../Images/tank-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Russia/Central Asia/S. Asia' onPress={this.handleCentralAsia}
          source={require('../Images/russia-icon.png')}
        />
        <Separator backgroundColor={'#D8D8D8'} />
        <DrawerButton
          text='Women'
          onPress={this.handleWomen}
          source={require('../Images/women-symbol-icon.png')}
        />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
