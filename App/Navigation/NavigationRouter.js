// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../Navigation/CustomNavBar'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import ListviewSectionsExample from '../Containers/ListviewSectionsExample'
import ListviewSearchingExample from '../Containers/ListviewSearchingExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'

import Bills from '../Containers/Bills'
import Landing from '../Containers/Landing'
import Footer from '../Containers/Footer'
import BillCardInList from '../Containers/BillCardInList'
import Header from '../Containers/Header'
import NavSideMenu from '../Containers/NavSideMenu'
import BillDetail from '../Containers/BillDetail'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='landing' component={Landing} title='Landing' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='bills' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
            <Scene key='billsActive' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} showOnlyActive />
            <Scene key='billsEnacted' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} showOnlyEnacted />
            <Scene key='billsFailed' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} showOnlyFailed />
            <Scene key='billsTabled' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} showOnlyTabled />
            <Scene key='billsSortByDateIntroduced' component={Bills} title='Bills' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} sortByDateIntroduced />
            <Scene key='header' component={Header} title='Header' />
            <Scene key='bill-card-in-list' component={BillCardInList} title='BillCardInList' />
            <Scene key='nav-side-menu' component={NavSideMenu} title='NavSideMenu' />
            <Scene key='billDetail' component={BillDetail} title='Bill Detail' renderRightButton={NavItems.hamburgerButton} renderBackButton={NavItems.backButton} />
          </Scene>
        </Scene>
        <Scene key='footer' component={Footer} title='Footer' />
      </Router>
    )
  }
}

export default NavigationRouter
